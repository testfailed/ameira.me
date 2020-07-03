import Link from 'next/link'
import ExternalLink from './ExternalLink'

export default function NavigationLink({ hideMenu, text, onClick, href, external, ariaLabel }) {
  // If onClick is passed then ignore href
  const children = (onClick) ? text : getLink({ text, href, external, ariaLabel });

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    hideMenu();
  }

  return (
    <li onClick={handleClick} className="inline-block py-3 md:py-0 px-3 tracking-wider cursor-pointer">
      {children}
    </li>
  )
}

const getLink = ({ href, external, text, ariaLabel }) => {
  if (external) {
    return (
      <ExternalLink aria-label={(ariaLabel) ? ariaLabel : text} href={`${process.env.BACKEND_URL}${href}`}>
        {text}
      </ExternalLink>
    )
  } else {
    return (
      <Link href={`${process.env.BACKEND_URL}${href}`}>
        <a aria-label={ariaLabel}>{text}</a>
      </Link>
    )
  }
}
