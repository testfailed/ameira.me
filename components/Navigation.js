import { useState } from 'react'
import Link from 'next/link'
import EmailLink from '../components/EmailLink'
import ExternalLink from '../components/ExternalLink'
import SocialIcons from '../components/SocialIcons'
import Hamburger from '../components/Hamburger'
import Cross from '../components/Cross'

const pages = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/',
  },
  {
    name: 'Portfolio',
    href: '/',
  },
]

export default function Navigation() {
  const [display, setDisplay] = useState(false);
  const showMenu = () => setDisplay(true);
  const hideMenu = () => setDisplay(false);

  const cssDisplay = display ? '' : 'hidden';
  return (
    <>
      <Hamburger onClick={showMenu} />
      <nav className={`${cssDisplay} fixed w-screen h-screen md:w-full md:h-auto flex justify-center items-center pt-8 pb-8 md:pr-12 text-lg z-50 font-nav flex-col-reverse md:flex-row bg-opacity-1 md:bg-opacity-0 bg-white`}>
        <Cross onClick={hideMenu} />
        <div className="md:ml-12 p-4 bg-opacity-0 md:bg-opacity-nav bg-white tracking-wider justify-center md:justify-left">
          <EmailLink />
        </div>
        <div className="flex justify-center md:justify-end w-full">
          <ul className="pb-4 md:p-4 bg-opacity-0 md:bg-opacity-nav bg-white flex justify-center items-center flex-col md:flex-row">
            {pages.map(({ name, href }) => <li className="inline-block py-3 md:py-0 px-3 tracking-wider" key={name}>
              <Link href={`${process.env.BACKEND_URL}${href}`}>
                <a aria-label={name}>{name}</a>
              </Link>
            </li>)}
            <li className="inline-block py-3 md:py-0 px-3 tracking-wider">
              <ExternalLink aria-label="CV" href={`${process.env.BACKEND_URL}/assets/AmeiraCV.pdf`}>
                CV
              </ExternalLink>
            </li>
            <li className="inline-block py-3 md:py-0 px-1">
              <SocialIcons />
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
