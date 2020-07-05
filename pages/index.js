import Head from 'next/head';
import Container from '../components/Generic/Container';
import Layout from '../components/Generic/layout';
import Hero from '../components/HomePage/Hero';
import About from '../components/HomePage/About';
import Portfolio from '../components/HomePage/Portfolio';
import { getCompletePortfolio } from '../lib/api';

export default function Index({ articles }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Ameira Yanni</title>
        </Head>
        <Hero />
        <Container>
          <About />
          <Portfolio articles={articles} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const articles = getCompletePortfolio([
    'title',
    'date',
    'description',
    'slug',
    'image',
    'excerpt',
  ]);

  return {
    props: { articles },
  };
}
