'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

import { useState } from 'react'
const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'Project 1',
    description: 'Description of Project 1',
    stack: [
      {
        name: 'React',
      },
      {
        name: 'Next.js',
      },
    ],
    image:
      'https://res.cloudinary.com/dhweqnxgd/image/upload/v1743880187/starter_ad8wex.png',
    live: '',
    github: '',
  },
  {
    num: '02',
    category: 'frontend',
    title: 'Project 1',
    description: 'Description of Project 1',
    stack: [
      {
        name: 'React',
      },
      {
        name: 'Next.js',
      },
    ],
    image:
      'https://res.cloudinary.com/dhweqnxgd/image/upload/v1743880187/starter_ad8wex.png',
    live: '',
    github: '',
  },
]

const Projects = () => {
  const [project, setProject] = useState(projects[0])
  return (
    <>
      <motion.section>
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl-w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              {/* outline */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* projects categorys */}
              <h2 className="text-[42px] font-bold leading-none hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className='text-muted'>{project.description}</p>
              {/* stacks */}
              <ul className='flex gap-4'>
                {project.stack.map((stack, index) => (
                  <li key={index} className='text-xl text-accent'>{stack.name}
                  {/* remove comma */}
                  {index !== project.stack.length - 1 && ','}</li>
                ))}
              </ul>
              {/* border */}
              <div className='border border-border'></div>
              <div>
                <Link href={project.live} target='_blank' className='text-muted hover:text-accent transition-all duration-500'>Live</Link>
              </div>
            </div>
            <div className="w-full xl-w-[50%]">slider</div>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default Projects
