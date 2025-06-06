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
            I&apos;m Adir, a Fullstack Developer passionate about building
            clean, scalable, and user-centered web applications. I specialize in
            React, Next.js, Node.js, and MongoDB, and love bringing designs to
            life with pixel-perfect execution.
          </p>

          <p>
            I&apos;ve developed and launched full production platforms like{' '}
            <strong>AniZone</strong>, a real-time social app hosted on a
            self-managed Linux VPS, featuring custom CRM tools, live
            notifications, and thousands of active users. I&apos;m also the
            creator of <strong>StayFlex</strong>, an end-to-end booking system
            inspired by Airbnb.
          </p>

          <p>
            Beyond the code, I care deeply about UX, accessibility, and
            performance. I&apos;m always exploring new technologies and best
            practices, and take pride in writing maintainable code that supports
            real-world impact and user delight.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
