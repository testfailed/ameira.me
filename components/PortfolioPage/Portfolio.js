import { useEffect, useState } from 'react';
import PortfolioItem from './PortfolioItem';
import { calculateNumItemsOnRow } from '../../lib/utils';

export default function Portfolio({ articles }) {
  const [numItemsOnRow, setNumItemsOnRow] = useState(0);

  useEffect(() => {
    const num = calculateNumItemsOnRow(window.innerWidth);
    setNumItemsOnRow(num);
  }, []);
  return (
    <section>
      <div className="flex flex-row flex-wrap justify-center flex-1">
        {articles.map((article, index) => {
          const { title } = article;
          const onTopRow = index < numItemsOnRow;
          // eslint-disable-next-line react/jsx-props-no-spreading
          return <PortfolioItem key={`portfolio-item-${title}`} onTopRow={onTopRow} {...article} />;
        })}
      </div>
    </section>
  );
}
