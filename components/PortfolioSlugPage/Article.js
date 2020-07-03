import Head from 'next/head'
import DateFormatter from '../Generic/DateFormatter'
import PrintMarkdownHTML from '../Generic/PrintMarkdownHTML'

export default function Article({ title, image, date, content }) {
  const imgSrc = `${process.env.BACKEND_URL}/assets/portfolio/${image}`
  return (
    <article className="flex flex-col items-center justify-center">
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={imgSrc} />
      </Head>
      <img src={imgSrc} alt={`Image for ${title}`} />
      <h1 className="text-6xl font-title">{title}</h1>
      <PrintMarkdownHTML content={content} />
    </article>
  )
}
