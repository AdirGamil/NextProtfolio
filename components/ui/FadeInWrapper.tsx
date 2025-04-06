'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right'

type FadeInWrapperProps = {
  children: ReactNode
  delay?: number
  duration?: number
  distance?: number
  direction?: Direction
  once?: boolean
}

export default function FadeInWrapper({
  children,
  delay = 0.2,
  duration = 0.6,
  distance = 20,
  direction = 'up',
  once = false,
}: FadeInWrapperProps) {
  const getOffset = () => {
    switch (direction) {
      case 'up':
        return { x: 0, y: distance }
      case 'down':
        return { x: 0, y: -distance }
      case 'left':
        return { x: distance, y: 0 }
      case 'right':
        return { x: -distance, y: 0 }
      default:
        return { x: 0, y: distance }
    }
  }

  const offset = getOffset()

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      viewport={{ once }}
    >
      {children}
    </motion.div>
  )
}
