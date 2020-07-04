import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useIsMobile } from './useIsMobile'

export function useAnimationOnScroll(animationValue, threshold = null) {
  const isMobile = useIsMobile();
  const defaultThreshold = (isMobile) ? 0.2 : 0.5;

  const [viewRef, inView, entry] = useInView({
    threshold: (threshold !== null) ? threshold : defaultThreshold,
  })
  const [animationHasRun, setAnimationHasRun] = useState(false);
  const setAnimate = () => {
    setAnimationHasRun(true);
  }

  const animate = (inView && !animationHasRun) ? animationValue : false;
  return [viewRef, animate, setAnimate];
}
