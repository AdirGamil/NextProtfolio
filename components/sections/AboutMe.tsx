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
    I&apos;m Adir, a Fullstack Developer focused on building modern, efficient
    and scalable web applications with real impact. My main stack includes
    React, Next.js, Node.js and MongoDB, where I combine clean architecture
    with thoughtful UI and pixel perfect execution.
  </p>

  <p>
    Over the years, I&apos;ve created and launched complete production platforms
    such as <strong>AniZone</strong>, a real time social ecosystem built for
    anime fans, running on a self managed Linux VPS with advanced features like
    custom CRM systems, live notifications, role based permissions and high
    performance optimization for thousands of active users.
  </p>

  <p>
    I&apos;m also the creator of <strong>StayFlex</strong>, an end to end booking
    platform inspired by Airbnb, where I handled everything from system design,
    data architecture and UI logic to deployment, optimization and long term
    scalability planning.
  </p>

  <p>
    My approach goes beyond writing code. I place strong emphasis on user
    experience, accessibility, performance and long term maintainability. I
    enjoy solving complex problems, refining details and constantly improving
    my workflow through modern tools and best practices.
  </p>
</div>

      </div>
    </section>
  )
}

export default AboutMe
