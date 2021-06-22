import { motion } from 'framer-motion';
import { Animations } from '../../styles/animations';
import { Container } from '@material-ui/core';

export default function AnimatedPage({ children }: { children: any }) {
  return (
    <motion.div
      variants={Animations.pageTransition}
      initial={'hidden'}
      animate={'visible'}
      exit={'exit'}>
      <Container
        maxWidth={false}
        disableGutters={true}
        style={{ minHeight: '95vh' }}>
        {children}
      </Container>
    </motion.div>
  );
}
