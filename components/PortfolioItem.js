

export default function About(props) {
  const { imgSrc, name, date, description, quote, invert } = props;
  const flexDirection = (invert) ? 'flex-row-reverse' : 'flex-row';
  return (
    <div className={`flex mb-8 ${flexDirection}`}>
      <div className="w-full mx-4 flex items-center justify-center flex-col text-center bg-pink-custom">
        <h4 className="text-2xl m-4 font-title">{name}</h4>
        <p className="text-xl m-4 font-title">{date}</p>
        <p className="text-lg m-4 font-title">{description}</p>
        <p className="text-lg m-4 font-title">'{quote}'</p>
      </div>
      <div className="w-full mx-4">
        <img
          src={`${process.env.BACKEND_URL}/assets/portfolio/${imgSrc}`}
          alt={`Cover Image for ${name}`}
          className="w-full object-cover h-p-item max-h-p-item"
        />
      </div>
    </div>
  )
}
