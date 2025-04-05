'use client'
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { navLinks } from '@/contracts/navLinks'

const NavbarDesktop = () => {
  return (
    <nav className="flex items-center justify-between w-full">
      {/* לוגו */}
      <div className="text-2xl font-heading font-bold text-primary">AdirG</div>

      {/* לינקים */}
      <ul className="flex gap-8">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="nav__link text-foreground hover:text-primary transition font-medium"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* אייקונים */}
      <div className="flex gap-4 items-center">
        <Link
          href="https://github.com/AdirGamil"
          target="_blank"
          aria-label="GitHub"
        >
          <FaGithub className="text-foreground hover:text-primary text-xl transition" />
        </Link>
        <Link
          href="https://linkedin.com/in/adirg"
          target="_blank"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-foreground hover:text-primary text-xl transition" />
        </Link>
      </div>
    </nav>
  )
}

export default NavbarDesktop
