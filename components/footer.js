import EmailLink from '../components/EmailLink'
import ExternalLink from '../components/ExternalLink'
import SocialIcons from '../components/SocialIcons'

export default function Footer() {
  return (
    <footer className="w-full flex justify-center items-center flex-col font-body">
        <EmailLink className="p-4" />
        <SocialIcons />
        <p className="m-8">&copy;	Designed by Ameira Yanni, Created by <ExternalLink href="https://wallis.dev">James</ExternalLink></p>
    </footer>
  )
}
