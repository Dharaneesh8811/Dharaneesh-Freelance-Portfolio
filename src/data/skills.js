import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiBootstrap,
  SiFigma,
  SiGit,
  SiGithub,
  SiVercel,
} from 'react-icons/si'
import { FaCss3Alt } from 'react-icons/fa6';

export const marqueeSkills = [
  'React',
  'JavaScript',
  'TypeScript',
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'Bootstrap',
  'Figma',
  'Framer Motion',
  'Git',
  'GitHub',
  'Vite',
  'Vercel',
]

// color is optional — leave it out (or null) for icons that are pure white/black
// so they inherit the theme-aware default instead of disappearing on light mode.
// level is an approximate proficiency out of 100, used for the skill bars.
export const skills = [
  { name: 'React', icon: SiReact, color: '#61DAFB', category: 'Frontend', level: 95 },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'Frontend', level: 92 },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26', category: 'Frontend', level: 96 },
  { name: 'CSS3', icon: FaCss3Alt, color: '#2965F1', category: 'Frontend', level: 94 },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8', category: 'Styling', level: 90 },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3', category: 'Styling', level: 85 },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E', category: 'Design', level: 88 },
  { name: 'Git', icon: SiGit, color: '#F05032', category: 'Tools', level: 90 },
  { name: 'GitHub', icon: SiGithub, color: null, category: 'Tools', level: 90 },
  { name: 'Vercel', icon: SiVercel, color: null, category: 'Tools', level: 85 },
]
