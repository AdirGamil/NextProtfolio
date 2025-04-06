import AboutMe from "@/components/sections/AboutMe"
import ContactForm from "@/components/sections/ContactForm"
import Hero from "@/components/sections/Hero"
import Projects from "@/components/sections/Projects"
import Skills from "@/components/sections/Skills"
import FadeInWrapper from "@/components/ui/FadeInWrapper"

export default function Home() {
  return (
    <main>
      <FadeInWrapper direction="up" delay={0.1}>
        <Hero />
      </FadeInWrapper>

      <FadeInWrapper direction="up" delay={0.2}>
        <AboutMe />
      </FadeInWrapper>

      <FadeInWrapper direction="left" delay={0.3}>
        <Skills />
      </FadeInWrapper>

      <FadeInWrapper direction="right" delay={0.4}>
        <Projects />
      </FadeInWrapper>

      <FadeInWrapper direction="up" delay={0.5}>
        <ContactForm />
      </FadeInWrapper>
    </main>
  )
}
