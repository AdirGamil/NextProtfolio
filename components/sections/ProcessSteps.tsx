'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FaComments, FaPalette, FaCode, FaRocket } from 'react-icons/fa'
import SectionTitle from '../ui/SectionTitle'

interface Step {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}

const steps: Step[] = [
  {
    id: 1,
    title: 'Discovery & Planning',
    description:
      'We start with a focused conversation to understand your goals, define requirements and create a clear timeline for the project.',
    icon: <FaComments />,
  },
  {
    id: 2,
    title: 'Design & Strategy',
    description:
      'Visual direction and user experience are shaped to reflect your brand and ensure a smooth, intuitive interface.',
    icon: <FaPalette />,
  },
  {
    id: 3,
    title: 'Development & Testing',
    description:
      'The website is built with clean, scalable code while ensuring performance, responsiveness and cross browser quality.',
    icon: <FaCode />,
  },
  {
    id: 4,
    title: 'Launch & Delivery',
    description:
      'After final approval, the project goes live and is fully optimized for smooth real world usage.',
    icon: <FaRocket />,
  },
]

const ProcessSteps = (): React.ReactNode => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [activeStep, setActiveStep] = useState<number>(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = Number((entry.target as HTMLElement).dataset.step)
            setActiveStep(stepIndex)
          }
        })
      },
      { threshold: 0.5 }
    )

    const items =
      containerRef.current?.querySelectorAll<HTMLElement>('.process-step')
    items?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 px-4" id="process">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="Process"
          title="How the Process Works"
          description="A simple and transparent flow that takes your idea from concept to launch"
          align="center"
        />

        <div ref={containerRef} className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              data-step={index}
              className={`process-step relative p-6 rounded-2xl border border-border bg-foreground/5 transition-all duration-300 ${
                activeStep === index
                  ? 'shadow-lg border-accent'
                  : 'opacity-70'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-accent text-2xl">{step.icon}</span>
                <span className="text-sm font-semibold text-accent">
                  Step {step.id}
                </span>
              </div>

              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-muted text-sm leading-relaxed">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-[-25px] top-1/2 w-6 h-1 bg-accent"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSteps
