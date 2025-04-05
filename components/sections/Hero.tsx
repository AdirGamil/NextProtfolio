'use client'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-background text-foreground px-4">
      {/* Left Side - Text & Links */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl md:pr-8 text-center md:text-left"
      >
  {/* Subtitle */}
  <h5 className="text-muted text-lg sm:text-xl font-body mb-2">
        FullStack Developer
      </h5>
      {/* Main Headline */}
      <h1 className="text-4xl sm:text-5xl font-bold font-heading mb-4">
        Hello, I'm <span className="">Adir Gamil</span>
      </h1>
      {/* Description */}
      <p className="text-muted text-lg sm:text-xl font-body mb-8">
        I'm a fullstack developer with a passion for building innovative and scalable web solutions.
      </p>
      {/* CTA Button */}
      <div className="mb-8 flex justify-center md:justify-start gap-4 items-center">
        <button className="bg-accent text-foreground px-6 py-3 rounded-lg hover:bg-primary transition-colors duration-300">
          Download CV
        </button>
      {/* Social Icons */}
      <div className="flex justify-center md:justify-start gap-2 text-2xl">
        <a
          href="https://github.com/AdirGamil"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="hover:text-primary transition-colors" />
        </a>
        <a
          href="https://linkedin.com/in/adirg"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="hover:text-primary transition-colors" />
        </a>
      </div>
      </div>
      </motion.div>

      {/* Right Side - Profile with Rotating Ring */}
      <div className="relative w-64 h-64 flex justify-center items-center">
          {/* טבעת מסתובבת עם SVG */}
          <motion.svg
            className="absolute w-[300px] h-[300px]"
            viewBox="0 0 506 506"
            fill="transparent"
            xmlns="http://www.w3.org/2000/svg"
            animate={{ rotate: 360 }}
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
                rotate: [0, 360, 720],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
          </motion.svg>

          {/* התמונה */}
          <div className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-border bg-background z-10">
            <img
              src="https://placehold.co/224x224"
              alt="Adir's Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

    </section>
  )
}

export default Hero
