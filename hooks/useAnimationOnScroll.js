import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

export function useAnimationOnScroll(animationValue) {
  const [viewRef, inView, entry] = useInView({
    threshold: 0.5,
  })
  const [animationHasRun, setAnimationHasRun] = useState(false);
  const setAnimate = () => {
    setAnimationHasRun(true);
  }

  const animate = (inView && !animationHasRun) ? animationValue : false;
  return [viewRef, animate, setAnimate];
}
