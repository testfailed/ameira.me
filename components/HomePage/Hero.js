import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function Hero() {
  const subTitle = createSubTitle();
  return (
    <section id="hero">
      <div className="w-screen h-screen md:bg-fixed flex justify-center items-center flex-col font-title bg-cover bg-top" style={{
        backgroundImage: `url('${require('../../images/home/header-background.jpg')}')`,
      }} >
        <h1 className="text-center text-7xl block">Ameira Yanni</h1>
        <motion.p
          variants={container}
          initial="hidden"
          animate="visible"
          className="block mt-5 mb-20 flex items-center text-xl"
        >
          {subTitle}
        </motion.p>
      </div>
    </section>
  )
}

const createSubTitle = () => {
  const titles = ['copywriter', 'actor', 'creative'];
  const spans = [];
  titles.map((text, index, arr) => {
    spans.push(<motion.span key={`subtitle-${index}`} variants={item}>{text}</motion.span>);
    if (index !== arr.length -1) {
      spans.push(<motion.span key={`subtitle-span${index}`} variants={item} className="rounded-full inline-block h-2 w-2 mx-2 mt-1 bg-black" ></motion.span>);
    }
  })
  return spans;
}
