import Footer from '../components/Footer'
import Meta from '../components/meta'
import Navigation from '../components/Navigation'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Navigation />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
