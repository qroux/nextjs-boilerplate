export const Animations = {
  pageTransition: {
    hidden: {
      y: -5,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { ease: 'easeOut', duration: 0.5 },
    },
    exit: {
      y: -5,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  },
};
