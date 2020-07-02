export default function Hero() {
  return (
    <section>
      <div className="w-screen h-screen bg-fixed flex justify-center items-center flex-col" style={{ 
        backgroundImage: `url('${process.env.BACKEND_URL}/assets/home/header-background.jpg')`,
        backgroundPosition: 'top',
        backgroundSize: 'cover',
        fontFamily: 'Playfair Display, serif'
      }} >
        <h1 className="text-center text-7xl block">Ameira Yanni</h1>
        <p className="block mt-5 mb-20 flex items-center text-xl">
          {['copywriter', 'actor', 'creative'].map((text, index, arr) => {
              const span = <span key={text}>{text}</span>;
              if (index === arr.length -1) return span;
              return <>{span}<span className="rounded-full inline-block h-2 w-2 mx-2 mt-1 bg-black" ></span></>;
            }
          )}
        </p>
      </div>
    </section>
  )
}
