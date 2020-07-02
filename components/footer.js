import EmailLink from '../components/EmailLink'
import SocialIcons from '../components/SocialIcons'

export default function Footer() {
  return (
    <footer className="w-full flex justify-center items-center flex-col" style={{ fontFamily: 'Raleway, serif' }}>
        <EmailLink className="p-4" />
        <SocialIcons />
        <p className="m-8">&copy;	Designed by Ameira Yanni, Created by <a href="https://wallis.dev">James</a></p>
    </footer>
  )
}
