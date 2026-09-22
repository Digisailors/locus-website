// Generates isometric card illustrations into public/images/cards/*.svg
// Run: node scripts/gen-card-art.js
const fs = require('fs')
const path = require('path')

const out = path.join(__dirname, '..', 'public', 'images', 'cards')
fs.mkdirSync(out, { recursive: true })

const C = Math.cos(Math.PI / 6)
const mix = (h, t, a) => {
  const p = (x) => [1, 3, 5].map((i) => parseInt(x.slice(i, i + 2), 16))
  const A = p(h), B = p(t)
  return '#' + A.map((v, i) => Math.round(v + (B[i] - v) * a).toString(16).padStart(2, '0')).join('')
}
const light = (h, a) => mix(h, '#ffffff', a)
const dark = (h, a) => mix(h, '#000000', a)

class Scene {
  constructor(ox = 320, oy = 235) { this.o = [ox, oy]; this.s = [] }
  P(x, y, z) { return [this.o[0] + (x - y) * C, this.o[1] + (x + y) * 0.5 - z] }
  str(pts) { return pts.map((p) => this.P(...p).map((n) => n.toFixed(1)).join(',')).join(' ') }
  poly(pts, fill, extra = '') { this.s.push(`<polygon points="${this.str(pts)}" fill="${fill}" ${extra}/>`) }
  box(x, y, z, w, d, h, col) {
    this.poly([[x, y, z + h], [x + w, y, z + h], [x + w, y + d, z + h], [x, y + d, z + h]], light(col, 0.32))
    this.poly([[x + w, y, z], [x + w, y + d, z], [x + w, y + d, z + h], [x + w, y, z + h]], dark(col, 0.32))
    this.poly([[x, y + d, z], [x + w, y + d, z], [x + w, y + d, z + h], [x, y + d, z + h]], col)
  }
  // quads on the right (x+w) and left (y+d) faces; u,v in 0..1 of the face
  right(x, y, z, w, d, h, u0, u1, v0, v1, fill) {
    const X = x + w
    this.poly([[X, y + u0 * d, z + v0 * h], [X, y + u1 * d, z + v0 * h], [X, y + u1 * d, z + v1 * h], [X, y + u0 * d, z + v1 * h]], fill)
  }
  left(x, y, z, w, d, h, u0, u1, v0, v1, fill) {
    const Y = y + d
    this.poly([[x + u0 * w, Y, z + v0 * h], [x + u1 * w, Y, z + v0 * h], [x + u1 * w, Y, z + v1 * h], [x + u0 * w, Y, z + v1 * h]], fill)
  }
  windows(x, y, z, w, d, h, rows, cols, fill, litEvery = 3) {
    let n = 0
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
      const v0 = (r + 0.25) / rows, v1 = (r + 0.75) / rows
      const f = n++ % litEvery === 0 ? '#fde68a' : fill
      this.left(x, y, z, w, d, h, (c + 0.2) / cols, (c + 0.8) / cols, v0, v1, f)
      this.right(x, y, z, w, d, h, (c + 0.2) / cols, (c + 0.8) / cols, v0, v1, dark(f, 0.25))
    }
  }
  ring(cx, cy, z, r, a0, a1, n = 36) {
    const pts = []
    for (let i = 0; i <= n; i++) { const a = a0 + ((a1 - a0) * i) / n; pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a), z]) }
    return pts
  }
  cyl(cx, cy, z, r, h, col) {
    const top = this.ring(cx, cy, z + h, r, 0, Math.PI * 2)
    const front = this.ring(cx, cy, z + h, r, -Math.PI / 4, (3 * Math.PI) / 4)
    const back = this.ring(cx, cy, z, r, (3 * Math.PI) / 4, -Math.PI / 4)
    this.poly([...front, ...back], dark(col, 0.28))
    this.poly(top, light(col, 0.25))
  }
  disc(cx, cy, z, r, fill, extra = '') { this.poly(this.ring(cx, cy, z, r, 0, Math.PI * 2), fill, extra) }
  tree(x, y) {
    const [px, py] = this.P(x, y, 0)
    this.s.push(`<ellipse cx="${px}" cy="${py + 2}" rx="13" ry="6" fill="#000" opacity=".25"/><rect x="${px - 2}" y="${py - 14}" width="4" height="14" fill="#7c4a1e"/><circle cx="${px}" cy="${py - 26}" r="15" fill="#22c55e"/><circle cx="${px - 4}" cy="${py - 30}" r="7" fill="#86efac" opacity=".7"/>`)
  }
  pin(x, y, z, col = '#0099ff') {
    const [px, py] = this.P(x, y, z)
    this.s.push(`<ellipse cx="${px}" cy="${py + 3}" rx="10" ry="4" fill="#000" opacity=".3"/><path d="M${px} ${py} C ${px - 22} ${py - 24}, ${px - 16} ${py - 46}, ${px} ${py - 46} C ${px + 16} ${py - 46}, ${px + 22} ${py - 24}, ${px} ${py} Z" fill="${col}"/><circle cx="${px}" cy="${py - 30}" r="7" fill="#0b1f33"/>`)
  }
  raw(s) { this.s.push(s) }
  plate(w = 210, d = 210, col = '#25415f') { this.box(-w / 2, -d / 2, -14, w, d, 14, col) }
}

const svg = (body, id) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400" width="640" height="400">
<defs>
<linearGradient id="bg${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0b1f33"/><stop offset="1" stop-color="#12314f"/></linearGradient>
<radialGradient id="gl${id}" cx=".5" cy=".55" r=".5"><stop offset="0" stop-color="#0099ff" stop-opacity=".45"/><stop offset="1" stop-color="#0099ff" stop-opacity="0"/></radialGradient>
<pattern id="gr${id}" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0H0V32" fill="none" stroke="#38bdf8" stroke-opacity=".12"/></pattern>
</defs>
<rect width="640" height="400" fill="url(#bg${id})"/><rect width="640" height="400" fill="url(#gr${id})"/><ellipse cx="320" cy="290" rx="300" ry="120" fill="url(#gl${id})"/>
${body}
</svg>`

const scenes = {}

scenes.office = () => {
  const s = new Scene(320, 230)
  s.plate(220, 220)
  s.box(-40, -70, 0, 80, 80, 150, '#a5b4fc')
  s.windows(-40, -70, 0, 80, 80, 150, 7, 4, '#1e3a8a')
  s.box(-40, -70, 150, 80, 80, 8, '#6366f1')
  s.box(-10, 10, 0, 110, 70, 62, '#38bdf8')
  s.windows(-10, 10, 0, 110, 70, 62, 3, 5, '#0c4a6e')
  s.box(-105, -30, 0, 55, 60, 40, '#fbcfe8')
  s.windows(-105, -30, 0, 55, 60, 40, 2, 3, '#831843')
  s.tree(-90, 70); s.tree(70, -60); s.tree(85, 80)
  return s
}

scenes.hospital = () => {
  const s = new Scene(320, 232)
  s.plate(230, 220)
  s.box(-70, -70, 0, 130, 90, 120, '#e0f2fe')
  s.windows(-70, -70, 0, 130, 90, 120, 5, 5, '#0369a1')
  s.right(-70, -70, 0, 130, 90, 120, 0.3, 0.7, 0.55, 0.9, '#fff')
  s.right(-70, -70, 0, 130, 90, 120, 0.44, 0.56, 0.5, 0.95, '#ef4444')
  s.right(-70, -70, 0, 130, 90, 120, 0.3, 0.7, 0.66, 0.78, '#ef4444')
  s.box(-105, 30, 0, 70, 60, 55, '#bae6fd')
  s.windows(-105, 30, 0, 70, 60, 55, 2, 3, '#0c4a6e')
  s.box(-105, -70, 0, 34, 90, 80, '#7dd3fc')
  s.box(-110, 100, 0, 220, 16, 2, '#334155')
  s.tree(60, 50); s.tree(85, -20)
  return s
}

scenes.stadium = () => {
  const s = new Scene(320, 205)
  s.plate(250, 250)
  s.cyl(0, 0, 0, 115, 48, '#fdba74')
  s.disc(0, 0, 48, 100, '#c2410c')
  s.disc(0, 0, 47, 78, '#e7b98a')
  s.disc(0, 0, 44, 62, '#22c55e')
  s.disc(0, 0, 45, 30, 'none', 'stroke="#fff" stroke-width="2" stroke-opacity=".8"')
  s.raw(`<polyline points="${s.str(s.ring(0, 0, 45, 50, -0.7, 0.7, 2))}" fill="none" stroke="#fff" stroke-width="2" stroke-opacity=".7"/>`)
  return s
}

scenes.mall = () => {
  const s = new Scene(320, 232)
  s.plate(240, 210)
  s.box(-100, -60, 0, 170, 100, 80, '#fcd34d')
  s.windows(-100, -60, 0, 170, 100, 80, 2, 6, '#1e3a8a', 4)
  s.box(-100, 40, 0, 170, 30, 22, '#ef4444')
  for (let i = 0; i < 6; i++) s.left(-100, 40, 0, 170, 30, 22, i / 6, (i + 0.5) / 6, 0.6, 1, '#fff')
  s.box(-40, -60, 80, 60, 40, 30, '#f97316')
  s.left(-40, -60, 80, 60, 40, 30, 0.1, 0.9, 0.2, 0.8, '#7c2d12')
  s.tree(80, 60); s.tree(-95, 85)
  return s
}

scenes.webinar = () => {
  const s = new Scene(320, 225)
  s.plate(230, 200)
  s.box(-10, -10, 20, 14, 8, 8, '#334155')
  s.box(-80, -40, 30, 160, 14, 100, '#0f172a')
  s.left(-80, -40, 30, 160, 14, 100, 0.05, 0.95, 0.08, 0.92, '#0ea5a4')
  s.poly([[-12, -26, 60], [-12, -26, 100], [30, -26, 80]], '#fff')
  s.box(-14, -30, 0, 28, 20, 30, '#475569')
  for (const [x, y, c] of [[-100, 60, '#f472b6'], [-40, 80, '#fbbf24'], [30, 74, '#60a5fa'], [90, 50, '#a78bfa']]) {
    s.cyl(x, y, 0, 13, 32, c)
    const [px, py] = s.P(x, y, 44); s.raw(`<circle cx="${px}" cy="${py}" r="11" fill="#fcd9b6"/>`)
  }
  return s
}

scenes.laptop = () => {
  const s = new Scene(320, 232)
  s.plate(230, 200)
  s.box(-85, -55, 0, 170, 120, 8, '#cbd5e1')
  s.box(-85, -55, 8, 170, 8, 110, '#0f172a')
  s.left(-85, -55, 8, 170, 8, 110, 0.04, 0.96, 0.06, 0.94, '#0077e6')
  s.left(-85, -55, 8, 170, 8, 110, 0.06, 0.94, 0.7, 0.9, '#0052cc')
  s.disc(0, -47, 0, 1, 'none')
  s.poly([[-10, -47, 45], [-10, -47, 85], [26, -47, 65]], '#fff')
  s.left(-85, -55, 8, 170, 8, 110, 0.1, 0.7, 0.75, 0.8, '#38bdf8')
  s.box(-70, 10, 8, 140, 46, 2, '#94a3b8')
  return s
}

scenes.blog = () => {
  const s = new Scene(320, 230)
  s.plate(230, 200)
  s.box(-90, -60, 0, 110, 150, 10, '#f8fafc')
  s.box(-84, -66, 10, 110, 150, 10, '#e2e8f0')
  s.box(-78, -72, 20, 110, 150, 10, '#f8fafc')
  for (let i = 0; i < 6; i++) s.poly([[-60, -60 + i * 20, 31], [40 - (i % 3) * 20, -60 + i * 20, 31], [40 - (i % 3) * 20, -54 + i * 20, 31], [-60, -54 + i * 20, 31]], i === 0 ? '#0099ff' : '#94a3b8')
  ;[[60, 50, '#38bdf8'], [60, 84, '#0099ff'], [60, 118, '#0052cc']].forEach(([x, h, c], i) => s.box(x, -10 + i * 0, 0, 22, 22, h, c))
  s.box(60, 18, 0, 22, 22, 60, '#7dd3fc'); s.box(60, 46, 0, 22, 22, 110, '#0099ff')
  return s
}

scenes.asset = () => {
  const s = new Scene(320, 235)
  s.box(-120, -100, -14, 240, 200, 14, '#25415f')
  s.box(-120, -100, 0, 240, 200, 4, '#1b3550')
  ;[[-120, -20, 240, 4], [-20, -100, 4, 200], [40, 20, 4, 80]].forEach(([x, y, w, d]) => s.box(x, y, 4, w, d, 14, '#3b5f86'))
  s.box(-90, -70, 4, 40, 30, 24, '#f59e0b'); s.box(20, -80, 4, 34, 34, 30, '#38bdf8'); s.box(-80, 40, 4, 44, 34, 20, '#a78bfa'); s.box(70, 50, 4, 30, 30, 26, '#f472b6')
  s.pin(-70, -55, 40); s.pin(37, -63, 46, '#22d3ee'); s.pin(-58, 57, 36); s.pin(85, 65, 42, '#fbbf24')
  const [a, b] = s.P(-70, -55, 0), [c, d] = s.P(37, -63, 0)
  s.raw(`<path d="M${a} ${b} Q ${(a + c) / 2} ${b - 50} ${c} ${d}" stroke="#38bdf8" stroke-width="3" fill="none" stroke-dasharray="6 6"/>`)
  return s
}

scenes.ebook = () => {
  const s = new Scene(320, 235)
  s.plate(230, 200)
  s.box(-80, -40, 0, 120, 90, 22, '#0099ff'); s.box(-72, -34, 22, 116, 86, 20, '#f8fafc'); s.box(-84, -44, 42, 120, 90, 24, '#0052cc')
  s.box(-76, -38, 66, 116, 86, 18, '#f59e0b')
  s.poly([[-60, -20, 84], [30, -20, 84], [30, -12, 84], [-60, -12, 84]], '#fff')
  s.poly([[-60, 0, 84], [0, 0, 84], [0, 8, 84], [-60, 8, 84]], '#fde68a')
  s.box(60, 20, 0, 60, 70, 8, '#f8fafc')
  return s
}

scenes.guest = () => {
  const s = new Scene(320, 235)
  s.plate(230, 200)
  s.box(-32, -20, 20, 64, 14, 130, '#0f172a')
  s.left(-32, -20, 20, 64, 14, 130, 0.08, 0.92, 0.05, 0.95, '#12314f')
  s.left(-32, -20, 20, 64, 14, 130, 0.14, 0.86, 0.6, 0.78, '#38bdf8')
  s.left(-32, -20, 20, 64, 14, 130, 0.14, 0.86, 0.3, 0.5, '#e2e8f0')
  const [px, py] = s.P(0, -6, 170)
  for (let i = 1; i <= 3; i++) s.raw(`<path d="M${px - i * 22} ${py - i * 10} Q ${px} ${py - i * 30 - 10} ${px + i * 22} ${py - i * 10}" fill="none" stroke="#38bdf8" stroke-width="5" stroke-linecap="round" opacity="${1 - i * 0.2}"/>`)
  s.raw(`<circle cx="${px}" cy="${py + 6}" r="6" fill="#0099ff"/>`)
  s.pin(-90, 50, 0, '#fbbf24'); s.pin(80, 30, 0, '#22d3ee')
  return s
}

scenes.analytics = () => {
  const s = new Scene(320, 240)
  s.plate(240, 200)
  const hs = [40, 70, 55, 105, 85, 135]
  hs.forEach((h, i) => s.box(-100 + i * 34, -20, 0, 24, 30, h, i % 2 ? '#0099ff' : '#38bdf8'))
  const pts = hs.map((h, i) => s.P(-88 + i * 34, -5, h + 30))
  s.raw(`<polyline points="${pts.map((p) => p.map((n) => n.toFixed(1)).join(',')).join(' ')}" fill="none" stroke="#fff" stroke-width="4" stroke-linejoin="round"/>`)
  pts.forEach(([x, y]) => s.raw(`<circle cx="${x}" cy="${y}" r="6" fill="#0b1f33" stroke="#fff" stroke-width="3"/>`))
  return s
}

scenes.events = () => {
  const s = new Scene(320, 232)
  s.plate(230, 210)
  s.box(-80, -70, 0, 160, 130, 22, '#f8fafc')
  s.box(-80, -70, 22, 160, 130, 8, '#0099ff')
  for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) s.poly([[-68 + c * 24, -50 + r * 26, 31], [-52 + c * 24, -50 + r * 26, 31], [-52 + c * 24, -36 + r * 26, 31], [-68 + c * 24, -36 + r * 26, 31]], r === 1 && c === 3 ? '#f59e0b' : '#cbd5e1')
  s.pin(-20, -15, 32, '#ef4444')
  return s
}

scenes.map = () => {
  const s = new Scene(320, 250)
  for (let i = 0; i < 3; i++) { s.box(-100, -80, i * 46, 200, 160, 8, ['#38bdf8', '#0099ff', '#a5b4fc'][i]) }
  s.pin(-30, -10, 100, '#ef4444')
  return s
}

for (const [name, fn] of Object.entries(scenes)) {
  const sc = fn()
  fs.writeFileSync(path.join(out, `${name}.svg`), svg(sc.s.join('\n'), name))
}
console.log('generated', Object.keys(scenes).join(', '))
