import {
  Activity, Armchair, Award, BarChart3, BookOpen, Boxes, Building, Building2, Calculator, Calendar,
  Code2, Compass, Cpu, DoorOpen, Factory, FileText, GraduationCap, HeartPulse, HelpCircle, Hotel,
  LayoutGrid, Layers, Leaf, Lightbulb, Map, MapPin, MessageSquare, Navigation, Newspaper, Package,
  PlayCircle, Plane, Radar, ShoppingBag, Smile, Sparkles, TrendingUp, Trophy, Users, Video, Wifi, Wrench,
  type LucideIcon,
} from 'lucide-react'

const icons: Record<string, LucideIcon> = {
  Activity, Armchair, Award, BarChart3, BookOpen, Boxes, Building, Building2, Calculator, Calendar,
  Code2, Compass, Cpu, DoorOpen, Factory, FileText, GraduationCap, HeartPulse, HelpCircle, Hotel,
  LayoutGrid, Layers, Leaf, Lightbulb, Map, MapPin, MessageSquare, Navigation, Newspaper, Package,
  PlayCircle, Plane, Radar, ShoppingBag, Smile, TrendingUp, Trophy, Users, Video, Wifi, Wrench,
}

export default function SolutionIcon({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name] ?? Sparkles
  return <Icon className={className} aria-hidden="true" />
}
