'use client'

import { motion } from 'framer-motion'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { useState } from 'react'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Image from 'next/image'
import SliderButtons from '../ui/SliderButtons'
import { projects } from '@/contracts/projects'
import SectionTitle from '../ui/SectionTitle'

const Projects = () => {
  const [project, setProject] = useState(projects[0])

  const handleSlideChange = (swiper: SwiperClass) => {
    const currentSlide = swiper.activeIndex
    setProject(projects[currentSlide])
  }

  return (
    <section id="projects">
      <SectionTitle
        eyebrow="Projects"
        title="Selected Work"
        description="Each project reflects my dedication to building modern, accessible, and user-focused applications. From sleek landing pages to dynamic dashboards — I turn ideas into impactful digital experiences."
        align="center"
      />

      <motion.section className="py-20 bg-background text-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col xl:flex-row xl:gap-12">
            {/* LEFT */}
            <div className="w-full xl:w-1/2 flex flex-col gap-4 order-2 xl:order-none">
              <div className="text-7xl sm:text-8xl font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              <h4 className="text-muted text-sm font-medium capitalize">
                {project.category} project
              </h4>
<div>

              <h2 className="font-bold leading-tight text-foreground hover:text-accent transition-colors duration-300">
                {project.title}
              </h2>

              <p className="text-muted">{project.description}</p>
</div>

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
                  <a
                    href={project.live}
                    title="Live Preview"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted hover:text-accent transition-colors"
                  >
                    Live
                    <FaArrowUpRightFromSquare className="text-xs" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    title="Github Repo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted hover:text-accent transition-colors"
                  >
                    GitHub
                    <FaArrowUpRightFromSquare className="text-xs" />
                  </a>
                )}
              </div>
            </div>

            {/* RIGHT */}
            <div className="w-full xl:w-1/2 relative">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                onSlideChange={handleSlideChange}
                className="xl:h-[600px] mb-12"
              >
                {projects.map((proj, index) => (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[580px] relative group flex justify-center items-center">
                      {proj.image ? (
                        <div className="relative w-full h-full">
                          <Image
                            src={proj.image}
                            alt={proj.title}
                            quality={100}
                            sizes="100vw"
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-full h-[520px] flex items-center justify-center bg-muted/10 text-muted rounded-xl border border-border">
                          No Image Provided
                        </div>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
                {/* Slider Buttons */}
                <SliderButtons />
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
    </section>
  )
}

export default Projects
