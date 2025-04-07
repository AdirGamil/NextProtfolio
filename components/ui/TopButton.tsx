'use client'
import { FaArrowUp } from 'react-icons/fa'

export default function TopButton() {
    return (
        <a
          href="#top"
          className="fixed bottom-4 right-4 text-xl p-2 rounded-full bg-accent text-background hover:bg-accent-hover hover:translate-y-[-4px] transition-transform duration-300 z-50"
          aria-label="Back to Top"
        >
          <FaArrowUp />
        </a>
      )


}
