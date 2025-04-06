'use client'

import Marquee from 'react-fast-marquee'
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaVuejs,
  FaNode,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaAws,
  FaDocker,
  FaWordpress,
} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiVite,
  SiFirebase,
  SiMongodb,
  SiRedux,
  SiNetlify,
  SiCloudinary,
} from 'react-icons/si'

const skills = [
  { icon: <FaHtml5 />, name: 'HTML' },
  { icon: <FaCss3Alt />, name: 'CSS3' },
  { icon: <FaSass />, name: 'Sass' },
  { icon: <SiTailwindcss />, name: 'TailwindCSS' },
  { icon: <FaJs />, name: 'JavaScript' },
  { icon: <SiTypescript />, name: 'TypeScript' },
  { icon: <FaReact />, name: 'ReactJS' },
  { icon: <SiNextdotjs />, name: 'NextJS' },
  { icon: <FaVuejs />, name: 'VueJS' },
  { icon: <SiVite />, name: 'ViteJS' },
  { icon: <SiFirebase />, name: 'Firebase' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <FaWordpress />, name: 'WordPress' },
  { icon: <FaAws />, name: 'AWS' },
  { icon: <SiCloudinary />, name: 'Cloudinary' },
  { icon: <SiNetlify />, name: 'Netlify' },
  { icon: <FaDocker />, name: 'Docker' },
  { icon: <SiRedux />, name: 'Redux' },
  { icon: <FaNode />, name: 'Node.js' },
  { icon: <FaGitAlt />, name: 'Git' },
  { icon: <FaGithub />, name: 'GitHub' },
  { icon: <FaFigma />, name: 'Figma' },
]

const Skills = () => {
  return (
<section id="skills" className="py-20 bg-background text-foreground">
  <h2 className="text-center text-3xl font-bold mb-10 text-muted">
    Tech Stack
  </h2>

  <Marquee speed={40} gradient={true} gradientWidth={60}>
    <div className="flex gap-6 px-4 opacity-60 hover:opacity-90 transition-opacity">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center w-20 h-20 rounded-xl shadow-sm hover:scale-105 transition-transform duration-300
          bg-muted/10 text-muted dark:bg-muted/20 dark:text-muted"
        >
          <div className="text-2xl mb-1">{skill.icon}</div>
          <span className="text-xs font-medium">{skill.name}</span>
        </div>
      ))}
    </div>
  </Marquee>
</section>


  )
}

export default Skills
