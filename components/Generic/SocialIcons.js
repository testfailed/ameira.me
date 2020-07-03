import { FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import ExternalLink from './ExternalLink';

const socials = [
  {
    Icon: FaTwitter,
    href: 'https://twitter.com/AmeiraYanni',
  },
  {
    Icon: FaLinkedinIn,
    href: 'https://www.linkedin.com/in/ameira-yanni-4364b41ab/',
  },
  {
    Icon: FaInstagram,
    href: 'https://www.instagram.com/ameira.actor',
  },
]

export default function SocialIcons() {
  return <div className="flex flex-row items-center justify-center">
    {socials.map(({ Icon, href }, index) => (
      <ExternalLink key={`social-icon-${index}`} href={href} className="px-2">
        <Icon />
      </ExternalLink>
    ))}
  </div>
}
