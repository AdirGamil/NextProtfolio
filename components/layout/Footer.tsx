'use client'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background text-muted text-sm py-6">
      <div className="max-w-6xl mx-auto px-4 text-center">
        © {new Date().getFullYear()} <span className="font-semibold text-accent">Adir Gamil</span>. All rights reserved.
      </div>
    </footer>
  )
}
