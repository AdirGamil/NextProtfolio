import NavbarDesktop from '../nav/NavbarDesktop'
import NavbarMobile from '../nav/NavbarMobile'

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="hidden md:flex w-full">
          <NavbarDesktop />
        </div>
        <div className="block md:hidden w-full">
          <NavbarMobile />
        </div>
      </div>
    </header>
  )
}

export default Navbar
