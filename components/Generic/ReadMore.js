
import Link from 'next/link'
export default function ReadMore({ slug, className: propClasses }) {
  return (
    <Link as={`${process.env.BACKEND_URL}/portfolio/${slug}`} href={`${process.env.BACKEND_URL}/portfolio/[slug]`}>
      <a className={`px-4 py-2 mt-6 md:mt-8 border-solid border border-black font-body text-base ${propClasses}`}>
        Read more
      </a>
    </Link>
  )
}
