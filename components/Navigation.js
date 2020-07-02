import Link from 'next/link'
import EmailLink from '../components/EmailLink'
import ExternalLink from '../components/ExternalLink'
import SocialIcons from '../components/SocialIcons'

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
  return (
    <nav className="fixed w-full flex justify-center pt-8 pb-8 pr-12 text-lg z-50" style={{ fontFamily: 'Playfair Display, serif' }}>
      <div className="ml-12 p-4 bg-opacity-75 bg-white tracking-wider">
        <EmailLink />
      </div>
      <div className="flex justify-end w-full">
        <ul className="p-4 bg-opacity-75 bg-white flex justify-center items-center">
          {pages.map(({ name, href }) => <li className="inline-block px-3 tracking-wider" key={name}>
            <Link href={`${process.env.BACKEND_URL}${href}`}>
              <a aria-label={name}>{name}</a>
            </Link>
          </li>)}
          <li className="inline-block px-3 tracking-wider">
            <ExternalLink aria-label="CV" href={`${process.env.BACKEND_URL}/assets/AmeiraCV.pdf`}>
              CV
            </ExternalLink>
          </li>
          <li className="inline-block px-1">
            <SocialIcons />
          </li>
        </ul>
      </div>
    </nav>
  )
}
