import { motion } from 'framer-motion';
import { Animations } from '../../styles/animations';

export default function AnimatedPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={Animations.pageTransition}
      initial={'hidden'}
      animate={'visible'}
      exit={'exit'}
      style={{ boxSizing: 'border-box', padding: '1rem 2rem' }}>
      {children}
    </motion.div>
  );
}
