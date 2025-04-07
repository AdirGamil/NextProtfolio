import Image from 'next/image'
import SectionTitle from '../ui/SectionTitle'
import { assets } from '@/assets/assets'

const AboutMe = () => {
  return (
    <section id="about" className="py-20">
      <SectionTitle
        eyebrow="About"
        title="Who I Am"
        description="A passionate developer who thrives on turning ideas into powerful digital experiences."
        align="center"
      />

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 mt-10 px-4">
        {/* תמונה בצד שמאל במסכים גדולים */}
        <div className="w-full md:w-1/3 flex justify-center">
          <Image
            src={assets.user_image}
            alt="Adir's Profile"
            width={280}
            height={240}
            className="rounded-lg border border-border shadow-md"
          />
        </div>

        {/* תוכן טקסטואלי */}
        <div className="w-full md:w-2/3 text-muted text-center md:text-left space-y-4">
          <p>
            I&apos;m Adir, a Fullstack Developer with a strong passion for building
            clean, responsive, and user-focused web applications. After
            completing an intensive coding bootcamp and spending months learning
            on my own, I&apos;ve developed a wide range of projects - from elegant
            landing pages to full-featured web platforms.
          </p>

          <p>
            My tech stack includes React, Next.js, TypeScript, Node.js, and
            TailwindCSS, and I&apos;m always exploring new tools and technologies to
            sharpen my skills and stay up to date with modern development
            practices.
          </p>

          <p>
            What drives me most is creating meaningful digital experiences that
            combine creativity, performance, and accessibility. Whether it&apos;s a
            personal project or part of a bigger product, I take pride in
            writing scalable, maintainable code that makes a real impact.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
