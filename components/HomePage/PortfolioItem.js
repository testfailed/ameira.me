import Link from 'next/link'
import DateFormatter from '../Generic/DateFormatter'

export default function About(props) {
  const { image, title, date, description, excerpt, invert } = props;
  const flexDirection = (invert) ? 'md:flex-row-reverse' : 'md:flex-row';
  return (
    <div className={`flex mb-8 flex-col-reverse ${flexDirection}`}>
      <div className="w-full px-2 md:px-0 md:py-8 pt-6 pb-10 md:mx-4 flex items-center justify-center flex-col text-center bg-pink-custom md:min-h-1/2">
        <h4 className="text-2xl m-2 md:mx-8 font-title">{title}</h4>
        <p className="text-base md:text-lg m-2 md:mx-8 md:my-4 font-title">
          <DateFormatter dateString={date} />
        </p>
        <p className="text-base md:text-lg m-2 md:mx-8 md:my-4 font-body">{description}</p>
        <p className="text-base md:text-lg m-2 md:mx-8 md:my-4 font-body">'{excerpt}'</p>
        <Link href="/portfolio">
          <a className="px-4 py-2 mt-6 md:mt-8 border-solid border border-black font-body text-base">
            Go to Portfolio
          </a>
        </Link>
      </div>
      <div className="w-full md:mx-4">
        <img
          src={`${process.env.BACKEND_URL}/assets/portfolio/${image}`}
          alt={`Cover Image for ${title}`}
          className="w-full object-cover h-full md:max-h-p-item"
        />
      </div>
    </div>
  )
}
