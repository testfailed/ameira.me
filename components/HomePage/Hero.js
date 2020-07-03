export default function Hero() {
  const subTitle = createSubTitle();
  return (
    <section>
      <div className="w-screen h-screen md:bg-fixed flex justify-center items-center flex-col font-title bg-cover bg-top" style={{
        // backgroundImage: `url('${process.env.BACKEND_URL}/assets/home/header-background.jpg')`,
        backgroundImage: `url('${require('../../images/home/header-background.jpg')}')`,
      }} >
        <h1 className="text-center text-7xl block">Ameira Yanni</h1>
        <p className="block mt-5 mb-20 flex items-center text-xl">
          {subTitle}
        </p>
      </div>
    </section>
  )
}

const createSubTitle = () => {
  const titles = ['copywriter', 'actor', 'creative'];
  const spans = [];
  titles.map((text, index, arr) => {
    spans.push(<span key={`subtitle-${index}`}>{text}</span>);
    if (index !== arr.length -1) {
      spans.push(<span key={`subtitle-span${index}`}className="rounded-full inline-block h-2 w-2 mx-2 mt-1 bg-black" ></span>);
    }
  })
  return spans;
}
