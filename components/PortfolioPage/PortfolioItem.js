import ReadMore from '../Generic/ReadMore'
import DateFormatter from '../Generic/DateFormatter'

export default function PortfolioItem(props) {
  const { image, title, date, description, excerpt, slug } = props;
  return (
    <div className="flex flex-col lg:w-33% md:w-50% p-1">
      <div className="bg-center bg-cover h-50vh relative" style={{ backgroundImage: `url('${process.env.BACKEND_URL}/assets/portfolio/${image}')` }}>
        <div className="absolute top-0 left-0 bg-img-tint h-full w-full flex justify-center items-center">
          <h4 className="text-2xl p-2 md:px-16 font-title text-center text-white">{title}</h4>
        </div>
      </div>
      <div className="w-full flex items-center justify-top flex-col text-center bg-grey-custom pb-16 flex-1">
        <p className="text-base md:text-lg font-title py-8"><DateFormatter dateString={date} /></p>
        <p className="text-base md:text-lg font-body p-4 md:px-6 lg:px-8">{description}</p>
        <p className="text-base md:text-lg font-body p-4 md:px-6 lg:px-8">'{excerpt}'</p>
        <ReadMore slug={slug} />
      </div>
    </div>
  )
}
