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
      <Marquee speed={30} autoFill={true} className="select-none">
        <div className="flex gap-8 p-4 opacity-90 ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group  flex flex-col items-center justify-center gap-1 hover:scale-105 transition-transform duration-300"
            >
              <div className="text-3xl text-muted group-hover:text-accent transition-colors">
                {skill.icon}
              </div>
              <span className="text-xs text-muted group-hover:text-accent">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  )
}

export default Skills
