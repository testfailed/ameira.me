import PortfolioItem from '../components/PortfolioItem'

const items = [
  {
    name: 'Album Review: Nadine Shah - Kitchen Sink',
    date: 'June 2020',
    description: 'A commission for Only A Northern One.',
    quote: 'Powerfully encompasses the pressures that society places on Women... She exposes everything and the kitchen sink.',
    imgSrc: 'kitchen-sink-logo.jpg',
  },
  {
    name: 'Diving back in: The Bish Bosh Bash',
    date: 'October 2019',
    description: 'A blog post for the Bristol Improv Theatre',
    quote: 'It\'s all about not being scared to look like an idiot on stage, because at the end of the day, that\'s usually the best thing to do.',
    imgSrc: 'bish-bosh-bash.jpg',
  }
]

export default function Portfolio() {
  return (
    <section>
      <div style={{ fontFamily: 'Playfair Display, serif' }} className="flex flex-col items-center w-full mt-32 mb-16">
        <h3 className="text-7xl">Portfolio</h3>
        <p className="text-lg my-8">Past. Present. Future.</p>
        {items.map(({ name, date, description, quote, imgSrc }, index) => {
          return <PortfolioItem name={name} date={date} description={description} quote={quote} imgSrc={imgSrc} invert={index % 2 === 1} />
        })}
      </div>
    </section>
  )
}
