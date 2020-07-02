

export default function About(props) {
  const { imgSrc, name, date, description, quote, invert } = props;
  const flexDirection = (invert) ? 'flex-row-reverse' : 'flex-row';
  return (
    <div className={`flex mb-8 ${flexDirection}`}>
      <div style={{ backgroundColor: '#DBC8BE' }} className="w-full mx-4 flex items-center justify-center flex-col text-center">
        <h4 style={{ fontFamily: 'Playfair Display, serif' }} className="text-2xl m-4">{name}</h4>
        <p style={{ fontFamily: 'Playfair Display, serif' }} className="text-xl m-4">{date}</p>
        <p style={{ fontFamily: 'Raleway, serif' }} className="text-lg m-4">{description}</p>
        <p style={{ fontFamily: 'Raleway, serif' }} className="text-lg m-4">'{quote}'</p>
      </div>
      <div className="w-full mx-4">
        <img
          src={`${process.env.BACKEND_URL}/assets/portfolio/${imgSrc}`}
          alt={`Cover Image for ${name}`}
          style={{
            height: '60vh',
            minHeight: '450px',
            width: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
    </div>
  )
}
