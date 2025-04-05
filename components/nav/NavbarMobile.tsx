'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useCycle, AnimatePresence } from 'framer-motion'
import { navLinks } from '@/contracts/navLinks'
import Link from 'next/link'

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 90% 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 90% 40px)',
    transition: {
      delay: 0.3,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

const menuVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export default function NavbarMobile() {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef<HTMLElement | null>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHeight(window.innerHeight)
    }
  }, [])

  return (
    <nav ref={containerRef} className="md:hidden z-50 relative">
      {/* כפתור Toggle */}
      <button
        onClick={() => toggleOpen()}
        className="text-3xl hover:cursor-pointer text-foreground absolute top-4 right-4 z-50"
        aria-label="Toggle Menu"
      >
        <motion.svg width="23" height="23" viewBox="0 0 23 23">
          <Path
            variants={{
              closed: { d: 'M 2 2.5 L 20 2.5' },
              open: { d: 'M 3 16.5 L 17 2.5' },
            }}
            animate={isOpen ? 'open' : 'closed'}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
            animate={isOpen ? 'open' : 'closed'}
          />
          <Path
            variants={{
              closed: { d: 'M 2 16.346 L 20 16.346' },
              open: { d: 'M 3 2.5 L 17 16.346' },
            }}
            animate={isOpen ? 'open' : 'closed'}
          />
        </motion.svg>
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => toggleOpen()}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        className="fixed top-0 right-0 bottom-0 w-72 bg-background z-40"
        custom={height}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={sidebarVariants}
      >
        <motion.ul
          className="pt-28 pr-10 flex flex-col gap-8 nav__links items-end"
          variants={menuVariants}
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
        >
          {navLinks.map((link) => (
            <motion.li
              key={link.href}
              className="text-lg font-medium text-foreground"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={link.href} onClick={() => toggleOpen()}>
                {link.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </nav>
  )
}

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
)
