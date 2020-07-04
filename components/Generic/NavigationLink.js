import Link from 'next/link'
import * as Scroll from 'react-scroll';
import { useRouter } from 'next/router';
import ExternalLink from './ExternalLink'

export default function NavigationLink({ closeMenu, text, scrollTo, href, external, ariaLabel }) {
  const url = `${process.env.BACKEND_URL}${href}`;
  const { pathname } = useRouter();
  const children = (scrollTo && (href === pathname)) ? getScrollLink({ text, scrollTo, closeMenu }) : getLink({ text, url, external, ariaLabel, scrollTo });
  return (
    <li onClick={closeMenu} className="inline-block py-3 md:py-0 px-3 tracking-wider cursor-pointer">
      {children}
    </li>
  )
}

const getLink = ({ url, external, text, ariaLabel, scrollTo }) => {
  if (external) {
    return (
      <ExternalLink aria-label={(ariaLabel) ? ariaLabel : text} href={url}>
        {text}
      </ExternalLink>
    )
  } else {
    return (
      <Link href={{ pathname: url, query: { scrollTo } }} as={url}>
        <a aria-label={ariaLabel}>{text}</a>
      </Link>
    )
  }
}

const getScrollLink = ({ text, scrollTo, closeMenu }) => {
  return (
    <Scroll.Link to={scrollTo} spy={true} smooth={true} duration={500} onSetActive={closeMenu}>
      {text}
    </Scroll.Link>
  )
}
