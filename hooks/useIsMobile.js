import { useMedia } from 'react-use';

export function useIsMobile() {
  const isMobile = useMedia(`(max-width: 640px)`);
  return isMobile;
}
