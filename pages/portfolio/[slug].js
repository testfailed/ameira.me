import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/Generic/Container';
import Layout from '../../components/Generic/layout';
import { getPortfolioBySlug, getCompletePortfolio } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import Article from '../../components/PortfolioSlugPage/Article';

export default function Post({ post }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <p>Loading...</p>
        ) : (
          // Pass entire post to article
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Article {...post} />
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPortfolioBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'image',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getCompletePortfolio(['slug']);

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}
