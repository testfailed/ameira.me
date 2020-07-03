import PortfolioItem from './PortfolioItem'

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
  },
]

export default function Portfolio({ portfolio }) {
  const itemsArr = [...portfolio, ...portfolio, ...portfolio, ...portfolio];
  return (
    <section>
      <div className="flex flex-row flex-wrap justify-center flex-1">
        {itemsArr.map((article, index) => {
          return <PortfolioItem key={`portfolio-item-${index}`} {...article} />
        })}
      </div>
    </section>
  )
}
