'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Image from 'next/image'

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'Project 1',
    description: 'A clean and responsive landing page built with modern tech stack.',
    stack: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'TailwindCSS' },
    ],
    image: 'https://res.cloudinary.com/dhweqnxgd/image/upload/v1725198000/%D7%9C%D7%9C%D7%90_%D7%A9%D7%9D_krjdij.png',
    live: 'https://example.com',
    github: 'https://github.com/example/project',
  },
  {
    num: '02',
    category: 'frontend',
    title: 'Project 2',
    description: 'An interactive dashboard with dynamic charts and state management.',
    stack: [
      { name: 'React' },
      { name: 'Redux' },
      { name: 'Chart.js' },
    ],
    image: 'https://res.cloudinary.com/dhweqnxgd/image/upload/v1725198000/%D7%9C%D7%9C%D7%90_%D7%A9%D7%9D_krjdij.png',
    live: '',
    github: 'https://github.com/example/dashboard',
  },
]

const Projects = () => {
  const [project, setProject] = useState(projects[0])

  const handleSlideChange = (swiper: any) => {
    const currentSlide = swiper.activeIndex
    setProject(projects[currentSlide])
  }

  return (
    <motion.section className="py-20 bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col xl:flex-row xl:gap-12">
          {/* LEFT */}
          <div className="w-full xl:w-1/2 flex flex-col gap-6 order-2 xl:order-none">
            <div className="text-7xl sm:text-8xl font-extrabold text-transparent text-outline">
              {project.num}
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold leading-tight capitalize hover:text-accent transition-colors duration-300">
              {project.category} project
            </h2>

            <p className="text-muted">{project.description}</p>

            <ul className="flex flex-wrap gap-3 text-sm sm:text-base font-medium text-accent">
              {project.stack.map((stack, index) => (
                <li key={index}>
                  {stack.name}
                  {index < project.stack.length - 1 && ','}
                </li>
              ))}
            </ul>

            <div className="border-t border-border my-4" />

            <div className="flex gap-6 text-sm sm:text-base">
              {project.live && (
                <Link
                  href={project.live}
                  target="_blank"
                  className="flex items-center gap-2 text-muted hover:text-accent transition-colors"
                >
                  Live
                  <FaArrowUpRightFromSquare className="text-xs" />
                </Link>
              )}
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 text-muted hover:text-accent transition-colors"
                >
                  GitHub
                  <FaArrowUpRightFromSquare className="text-xs" />
                </Link>
              )}
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full xl:w-1/2">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="xl:h-[520px] mb-12"
            >
              {projects.map((proj, index) => (
                <SwiperSlide key={index}>
                  {proj.image ? (
                    <div className='relative w-full h-full'>

                    <Image
                      src={proj.image}
                      alt={proj.title}
                      width={640}
                      height={360}
                      className="w-full h-[520px] object-cover rounded-xl border border-border"
                      />
                      </div>
                  ) : (
                    <div className="w-full h-[520px] flex items-center justify-center bg-muted/10 text-muted rounded-xl border border-border">
                      No Image Provided
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Projects


