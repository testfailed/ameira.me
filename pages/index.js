import React, { useRef } from 'react'


import Container from '../components/Generic/Container'
import Layout from '../components/Generic/layout'
import Head from 'next/head'
import Hero from '../components/HomePage/Hero'
import About from '../components/HomePage/About'
import Portfolio from '../components/HomePage/Portfolio'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

export default function Index({ allPosts }) {
  const aboutScrollRef = useRef(null)
  const scrollToAbout = () => scrollToRef(aboutScrollRef)
  return (
    <>
      <Layout navigationProps={{ scrollToAbout }}>
        <Head>
          <title>Ameira Yanni</title>
        </Head>
        <Hero />
        <Container>
          <About scrollRef={aboutScrollRef} />
          <Portfolio />
        </Container>
      </Layout>
    </>
  )
}
