import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

export function useAnimationOnScroll(animationValue, threshold = 0.5) {
  const [viewRef, inView, entry] = useInView({
    threshold,
  })
  const [animationHasRun, setAnimationHasRun] = useState(false);
  const setAnimate = () => {
    setAnimationHasRun(true);
  }

  const animate = (inView && !animationHasRun) ? animationValue : false;
  return [viewRef, animate, setAnimate];
}
