import { motion } from 'framer-motion';
import useAnimationOnScroll from '../../hooks/useAnimationOnScroll';

export default function PortfolioItemText(props) {
  const {
    title, image, transition, variants,
  } = props;
  const [viewRef, animate, setAnimationHasRun] = useAnimationOnScroll('show');
  return (
    <div ref={viewRef} className="w-full md:mx-4">
      <motion.img
        initial="hideImage"
        animate={animate}
        variants={variants}
        transition={transition}
        onAnimationComplete={setAnimationHasRun}
        src={require(`../../images/portfolio/${image}`)}
        alt={`Cover Image for ${title}`}
        className="w-full object-cover h-full md:max-h-p-item"
      />
    </div>
  );
}
