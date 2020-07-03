import PortfolioItem from './PortfolioItem'

export default function Portfolio({ articles }) {
  const itemsArr = [...articles, ...articles, ...articles, ...articles];
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
