'use client'

import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaPlus, FaMinus } from 'react-icons/fa'
import SectionTitle from '../ui/SectionTitle'

gsap.registerPlugin(ScrollTrigger)

interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: 'How does the collaboration process begin?',
    answer:
      'The first step is a short discovery call where we discuss your goals, requirements and timeline. This helps define the best direction for your project.',
  },
  {
    question: 'How long does it take to build a website?',
    answer:
      'Project duration depends on complexity and scope, but most websites are completed within two to four weeks.',
  },
  {
    question: 'Will the website be mobile responsive?',
    answer:
      'Yes. Every project is built with a mobile first approach to ensure optimal performance on all devices.',
  },
  {
    question: 'Do you provide maintenance after launch?',
    answer:
      'Yes. I offer ongoing support, updates and performance improvements after launch.',
  },
]

const FaqSection = (): React.ReactNode => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)
  
  // Refs for animations
  const sectionRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<HTMLDivElement[]>([])
  const answersRef = useRef<HTMLDivElement[]>([])

  // 1. אנימציית כניסה של הסקשן (Stagger Entry)
  useEffect(() => {
    const ctx = gsap.context(() => {
      // הסתרת פריטים התחלתית
      gsap.set(itemsRef.current, { y: 30, autoAlpha: 0 })

      // אנימציית כניסה בגלילה
      ScrollTrigger.batch(itemsRef.current, {
        start: 'top 85%',
        onEnter: (batch) => {
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power3.out',
          })
        },
        once: true // קורה רק פעם אחת
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // 2. אנימציית האקורדיון (פתיחה/סגירה)
  useEffect(() => {
    answersRef.current.forEach((el, index) => {
      if (!el) return

      const isOpen = activeIndex === index

      // אנימציית גובה ואטימות
      gsap.to(el, {
        height: isOpen ? 'auto' : 0,
        opacity: isOpen ? 1 : 0,
        duration: 0.4,
        ease: 'power2.inOut',
        overwrite: 'auto', // מונע התנגשויות אם לוחצים מהר
      })
    })
  }, [activeIndex])

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section className="py-24 px-4" id="faq" ref={sectionRef}>
      <div className="max-w-3xl mx-auto">
        <SectionTitle
          eyebrow="FAQ"
          title="Common Questions"
          description="Everything you need to know before starting"
          align="center"
        />

        <div className="mt-16 space-y-4">
          {faqs.map((item, index) => {
            const isOpen = activeIndex === index

            return (
              <div
                key={index}
                ref={(el) => { if (el) itemsRef.current[index] = el }}
                className={`group rounded-2xl border transition-colors duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-accent/5 border-accent shadow-[0_4px_20px_-10px_rgba(var(--accent),0.3)]'
                    : 'bg-background border-border/60 hover:border-border'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center px-6 py-6 md:px-8 text-left cursor-pointer outline-none bg-transparent"
                >
                  <span
                    className={`font-semibold text-lg transition-colors duration-300 ${
                      isOpen
                        ? 'text-accent'
                        : 'text-foreground group-hover:text-foreground/80'
                    }`}
                  >
                    {item.question}
                  </span>

                  {/* אייקון מסתובב */}
                  <div
                    className={`relative flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ml-4 shrink-0 ${
                      isOpen
                        ? 'bg-accent border-accent text-white rotate-180'
                        : 'bg-transparent border-border text-muted-foreground group-hover:border-accent group-hover:text-accent'
                    }`}
                  >
                    {isOpen ? <FaMinus size={12} /> : <FaPlus size={12} />}
                  </div>
                </button>

                {/* אזור התשובה - נשאר ב-DOM תמיד אבל מוסתר ע"י גובה */}
                <div
                  ref={(el) => { if (el) answersRef.current[index] = el }}
                  className="h-0 opacity-0 overflow-hidden will-change-[height,opacity]"
                >
                  <div className="px-6 md:px-8 pb-6 text-muted-foreground leading-relaxed border-t border-transparent">
                    {item.answer}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FaqSection