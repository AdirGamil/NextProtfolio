'use client'
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { navLinks } from '@/contracts/navLinks'
import ThemeToggle from '../ui/ThemeToggle'

const NavbarDesktop = () => {
  return (
    <nav className="flex items-center justify-between w-full">
      {/* לוגו */}
      <Link href="#top" className="text-2xl font-heading font-bold text-primary">
        AdirG<span className="text-accent">.</span>
      </Link>

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
      <div className="flex gap-2 items-center">
        <a
          href="https://github.com/AdirGamil"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-accent text-2xl transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/adirg"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-accent text-2xl transition-colors"
        >
          <FaLinkedin />
        </a>
      <ThemeToggle />

      </div>
    </nav>
  )
}

export default NavbarDesktop
