import Footer from './footer'
import Navigation from './Navigation'

export default function Layout({ children, navigationProps }) {
  return (
    <>
      <Navigation {...navigationProps} />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
