'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id='top' className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-background text-foreground px-4 pt-12 md:pt-0">
      {/* Mobile first: Profile Image on top */}
      <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8 md:mb-0 md:order-2 flex justify-center items-center">
        {/* Rotating Ring */}
        <motion.svg
          className="absolute w-[260px] h-[260px] md:w-[300px] md:h-[300px]"
          viewBox="0 0 506 506"
          fill="transparent"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          <motion.circle
            cx="253"
            cy="253"
            r="200"
            stroke="var(--color-accent)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ strokeDasharray: '24 10 0 0' }}
            animate={{
              strokeDasharray: [
                '15 120 25',
                '16 25 92 72',
                '4 250 22 22',
                '0 0 0 0',
              ],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </motion.svg>

        {/* Profile Image */}
        <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-border bg-background z-10">
  <Image
    src="https://res.cloudinary.com/dhweqnxgd/image/upload/v1744014252/profile_xdg3yh.png"
    alt="Adir's Profile"
    fill
    className="object-cover"
    priority
  />
</div>
      </div>

      {/* Text + Links */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl text-center md:text-left md:pr-12"
      >
        {/* Subtitle */}
        <h5 className="text-muted   font-body mb-2">FullStack Developer</h5>

        {/* Main Headline */}
        <h1 className="  font-bold font-heading mb-4">
          Hello, I&apos;m <span className="text-accent">Adir Gamil</span>
        </h1>

        {/* Description */}
        <p className="text-muted   font-body mb-8">
          I&apos;m a fullstack developer with a passion for building innovative and
          scalable web solutions.
        </p>

        {/* CTA + Socials */}
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
        <a
          href="/Adir-Resume.pdf"
          download={true}
          className="px-6 py-3 rounded-lg border-2 border-transparent bg-accent text-white font-medium transition-all duration-300
          hover:bg-primary cursor-pointer hover:bg-accent-hover
          active:bg-accent-active"
        >
          Download CV
        </a>


          <div className="flex gap-4 text-2xl">
            <a
              href="https://github.com/AdirGamil"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-accent transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/adirg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-accent transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
