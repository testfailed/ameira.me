import ReadMore from '../components/ReadMore'

export default function About(props) {
  const { imgSrc, name, date, description, quote, invert } = props;
  const flexDirection = (invert) ? 'md:flex-row-reverse' : 'md:flex-row';
  return (
    <div className={`flex mb-8 flex-col-reverse ${flexDirection}`}>
      <div className="w-full px-2 md:px-0 pt-6 pb-10 md:p-2 md:mx-4 flex items-center justify-center flex-col text-center bg-pink-custom">
        <h4 className="text-2xl m-2 md:mx-8 font-title">{name}</h4>
        <p className="text-base md:text-lg m-2 md:mx-8 md:my-4 font-title">{date}</p>
        <p className="text-base md:text-lg m-2 md:mx-8 md:my-4 font-body">{description}</p>
        <p className="text-base md:text-lg m-2 md:mx-8 md:my-4 font-body">'{quote}'</p>
        <ReadMore />
      </div>
      <div className="w-full md:mx-4">
        <img
          src={`${process.env.BACKEND_URL}/assets/portfolio/${imgSrc}`}
          alt={`Cover Image for ${name}`}
          className="w-full object-cover h-full md:h-p-item md:max-h-p-item"
        />
      </div>
    </div>
  )
}
