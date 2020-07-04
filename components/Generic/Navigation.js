import { useState } from 'react'
import { motion } from 'framer-motion'
import { useMedia } from 'react-use';
import EmailLink from './EmailLink'
import NavigationLink from './NavigationLink'
import SocialIcons from './SocialIcons'
import Hamburger from './Hamburger'
import Cross from './Cross'
import { useIsMobile } from '../../hooks/useIsMobile'

export default function Navigation() {
  const links = [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'About',
      scrollTo: 'about',
      href: '/'
    },
    {
      text: 'Portfolio',
      href: '/portfolio',
    },
    {
      text: 'CV',
      href: '/assets/AmeiraCV.pdf',
      external: true,
    }
  ]

  const [isOpen, setIsOpen] = useState(false);
  // Use isMobile to ensure that the navigation is always open in desktop
  const isMobile = useIsMobile();

  const openMenu = () => setIsOpen(true)
  const closeMenu = () => setIsOpen(false)

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  }

  const transition = {
    type: 'spring',
    mass: 0.7,
    damping: (isMobile) ? 13 : 10,
    delay: (isMobile) ? 0 : 0.5
  }

  return (
    <>
      <Hamburger onClick={openMenu} />
      <motion.nav
        animate={isMobile && !isOpen ? 'closed' : 'open'}
        initial={'closed'}
        variants={variants}
        transition={transition}
        className={`flex fixed w-screen h-screen md:w-full md:h-auto justify-center items-center pt-8 pb-8 md:pr-12 text-lg z-50 font-nav flex-col-reverse md:flex-row bg-opacity-1 md:bg-opacity-0 bg-white`}>
        <Cross onClick={closeMenu} />
        <div className="mb-24 md:mb-0 md:ml-12 p-4 bg-opacity-0 md:bg-opacity-nav bg-white tracking-wider justify-center md:justify-left">
          <EmailLink />
        </div>
        <div className="flex justify-center md:justify-end w-full">
          <ul className="pb-4 md:p-4 bg-opacity-0 md:bg-opacity-nav bg-white flex justify-center items-center flex-col md:flex-row">
            {links.map((link, index) => <NavigationLink key={`nav-link-${index}`} hideMenu={closeMenu} {...link} />)}
            <li className="inline-block py-3 md:py-0 px-1">
              <SocialIcons />
            </li>
          </ul>
        </div>
      </motion.nav>
    </>
  )
}
