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
            I'm Adir, a fullstack developer with a strong foundation in modern
            frontend and backend technologies. After completing an intensive
            coding bootcamp, I’ve built a wide range of projects — from sleek
            landing pages to complex web applications — always with a focus on
            clean code and user experience.
          </p>

          <p>
            I enjoy working with technologies like React, Next.js, Node.js,
            TypeScript, and TailwindCSS. I'm also constantly learning new tools
            and frameworks to stay updated with the latest in web development.
          </p>

          <p>
            Beyond the code, I'm passionate about building meaningful products
            that combine creativity, accessibility, and performance. Whether
            it’s a personal side project or a client-facing app, I’m always
            focused on writing scalable, maintainable solutions.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
