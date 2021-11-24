import { ReactNode, useEffect } from 'react';
import { motion, useAnimation, MotionProps } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Props = MotionProps;

interface MotionInViewProps extends Props {
  threshold?: number | number[];
  children?: ReactNode;
  className?: string;
}

export const MotionInView = ({ children, variants, transition, threshold, ...rest }: MotionInViewProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: threshold || 0,
    triggerOnce: true
  });

  useEffect(() => {
    if (!variants) return;
    if (inView) {
      controls.start(Object.keys(variants)[1]);
    } else {
      controls.start(Object.keys(variants)[0]);
    }
  }, [controls, inView, variants]);

  return (
    <motion.div
      ref={ref}
      initial={variants ? Object.keys(variants)[0] : false}
      animate={controls}
      variants={variants}
      transition={transition}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
