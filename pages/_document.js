import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" style={{ scrollBehavior: '' }}>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Raleway&family=Playfair+Display:ital,wght@0,500;1,400&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
