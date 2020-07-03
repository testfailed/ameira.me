import { useState } from 'react'
import EmailLink from './EmailLink'
import NavigationLink from './NavigationLink'
import SocialIcons from './SocialIcons'
import Hamburger from './Hamburger'
import Cross from './Cross'

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

  const [display, setDisplay] = useState(false);
  const showMenu = () => setDisplay(true);
  const hideMenu = () => setDisplay(false);

  const cssDisplay = display ? 'flex' : 'hidden';
  return (
    <>
      <Hamburger onClick={showMenu} />
      <nav className={`${cssDisplay} md:flex fixed w-screen h-screen md:w-full md:h-auto justify-center items-center pt-8 pb-8 md:pr-12 text-lg z-50 font-nav flex-col-reverse md:flex-row bg-opacity-1 md:bg-opacity-0 bg-white`}>
        <Cross onClick={hideMenu} />
        <div className="mb-24 md:mb-0 md:ml-12 p-4 bg-opacity-0 md:bg-opacity-nav bg-white tracking-wider justify-center md:justify-left">
          <EmailLink />
        </div>
        <div className="flex justify-center md:justify-end w-full">
          <ul className="pb-4 md:p-4 bg-opacity-0 md:bg-opacity-nav bg-white flex justify-center items-center flex-col md:flex-row">
            {links.map((link, index) => <NavigationLink key={`nav-link-${index}`} hideMenu={hideMenu} {...link} />)}
            <li className="inline-block py-3 md:py-0 px-1">
              <SocialIcons />
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
