import {
  Activity, Armchair, Award, BarChart3, BookOpen, Boxes, Building, Building2, Calculator, Calendar,
  Car, Code2, Compass, Cpu, Crosshair, DoorOpen, Factory, FileText, Gauge, GraduationCap, HeartPulse,
  HelpCircle, Hotel, LayoutGrid, Layers, Leaf, Lightbulb, Map, MapPin, MessageSquare, Navigation,
  Newspaper, Package, PlayCircle, Plane, Radar, Radio, ShieldCheck, ShoppingBag, Sliders, Smile,
  Sparkles, TrendingUp, Trophy, Truck, Users, Video, Wrench, Zap,
  type LucideIcon,
} from 'lucide-react'

const icons: Record<string, LucideIcon> = {
  Activity, Armchair, Award, BarChart3, BookOpen, Boxes, Building, Building2, Calculator, Calendar,
  Car, Code2, Compass, Cpu, Crosshair, DoorOpen, Factory, FileText, Gauge, GraduationCap, HeartPulse,
  HelpCircle, Hotel, LayoutGrid, Layers, Leaf, Lightbulb, Map, MapPin, MessageSquare, Navigation,
  Newspaper, Package, PlayCircle, Plane, Radar, Radio, ShieldCheck, ShoppingBag, Sliders, Smile,
  TrendingUp, Trophy, Truck, Users, Video, Wrench, Zap,
}

export default function SolutionIcon({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name] ?? Sparkles
  return <Icon className={className} aria-hidden="true" />
}
