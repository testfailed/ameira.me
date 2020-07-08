import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { animateScroll as scroller } from 'react-scroll';
import Footer from './Footer';
import Navigation from './Navigation';

const scrollToElement = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const scollToPx = el.offsetTop;
    scroller.scrollTo(scollToPx, {
      duration: 100,
      smooth: true,
    });
  }
};

export default function Layout({ children }) {
  const { query } = useRouter();

  useEffect(() => {
    if (query && query.scrollTo) {
      const { scrollTo } = query;
      scrollToElement(scrollTo);
    }
  }, [query]);

  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        <main className="overflow-hidden">{children}</main>
      </div>
      <Footer />
    </>
  );
}
