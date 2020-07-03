import { motion } from "framer-motion"
import { useAnimationOnScroll } from '../../hooks/useAnimationOnScroll'
import ReadMore from '../Generic/ReadMore'
import DateFormatter from '../Generic/DateFormatter'

const variants = {
  hide: {
    y: 300,
    opacity: 0
  },
  show: {
    y: 0,
    opacity: 1
  },
}

const transition = {
  ease: 'easeOut',
  duration: 0.5
}

export default function PortfolioItem(props) {
  const { image, title, date, description, excerpt, slug } = props;
  const [viewRef, animate, setAnimationHasRun] = useAnimationOnScroll('show');
  return (
    <div ref={viewRef} className="flex flex-col lg:w-33% md:w-50% p-1" >
      <motion.div
        initial={'hide'}
        animate={animate}
        variants={variants}
        transition={transition}
        onAnimationComplete={setAnimationHasRun}
        className="flex flex-col h-full"
      >
        <div className="bg-center bg-cover h-50vh relative" style={{ backgroundImage: `url('${require(`../../images/portfolio/${image}`)}')` }}>
          <div className="absolute top-0 left-0 bg-img-tint h-full w-full flex justify-center items-center">
            <h4 className="text-2xl p-2 md:px-16 font-title text-center text-white">{title}</h4>
          </div>
        </div>
        <div className="w-full flex items-center justify-top flex-col text-center bg-grey-custom pb-16 md:pb-32 flex-1 relative">
          <p className="text-base md:text-lg font-title py-8">
            <DateFormatter dateString={date} />
          </p>
          <p className="text-base md:text-lg font-body p-4 md:px-6 lg:px-8">{description}</p>
          <p className="text-base md:text-lg font-body p-4 md:px-6 lg:px-8">'{excerpt}'</p>
          <ReadMore slug={slug} className="md:absolute md:bottom-0 md:mb-16 border-pink-custom text-pink-custom hover:text-grey-custom hover:bg-pink-custom" />
        </div>
      </motion.div>
    </div>
  )
}
