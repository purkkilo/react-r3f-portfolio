import {
  SiJavascript,
  SiVuedotjs,
  SiMongodb,
  SiCss3,
  SiGit,
  SiReact,
  SiPython,
  SiMysql,
  SiTypescript,
  SiWordpress,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiHtml5,
  SiJest,
  SiVite,
  SiVuetify,
  SiExpo,
} from 'react-icons/si'
import { FaQuestionCircle } from 'react-icons/fa'

const ICON_MAP = {
  js: SiJavascript,
  vuejs: SiVuedotjs,
  mongodb: SiMongodb,
  css3: SiCss3,
  git: SiGit,
  tailwindcss: SiTailwindcss,
  react: SiReact,
  python: SiPython,
  mysql: SiMysql,
  typescript: SiTypescript,
  nextjs: SiNextdotjs,
  wordpress: SiWordpress,
  nodejs: SiNodedotjs,
  jest: SiJest,
  html5: SiHtml5,
  vite: SiVite,
  vuetify: SiVuetify,
  expo: SiExpo,
}

const ICON_COLORS = {
  js: 'text-yellow-400',
  vuejs: 'text-emerald-400',
  mongodb: 'text-green-500',
  css3: 'text-blue-500',
  git: 'text-orange-500',
  react: 'text-cyan-400',
  python: 'text-yellow-300',
  mysql: 'text-sky-500',
  typescript: 'text-blue-600',
  nextjs: 'text-black',
  tailwindcss: 'text-sky-400',
  nodejs: 'text-green-400',
  wordpress: 'text-sky-400',
  jest: 'text-pink-600',
  html5: 'text-orange-600',
  vite: 'text-purple-600',
  vuetify: 'text-sky-400',
  expo: 'text-grey-400',
}

const SkillIcon = ({ name, style, className = '' }) => {
  const Icon = ICON_MAP[name] ?? FaQuestionCircle
  const colorClass = ICON_COLORS[name] ?? 'text-gray-400'
  const names = [colorClass, 'transition-transform duration-200 ease-out hover:scale-110', className].join(' ')

  return (
    <div suppressHydrationWarning>
      <Icon style={style} className={names} />
    </div>
  )
}

export default SkillIcon
