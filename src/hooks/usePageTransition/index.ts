import { useEffect } from 'react';

import { Lookup, SpringRef, useTransition } from '@react-spring/web';

interface IUsePageTransitionProps {
  transRef: SpringRef<Lookup<any>>;
}

const usePageTransition = ({ transRef }: IUsePageTransitionProps) => {
  const transitions = useTransition(0, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: 'translate3d(0,100%,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,-50%,0)' },
  });

  useEffect(() => {
    transRef.start();
  }, [transRef]);

  return {
    transitions,
  };
};

export default usePageTransition;
