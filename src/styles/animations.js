export const ContainerVariant = {
  hidden: { x: '-100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,

    transition: {
      type: 'tween',
      duration: 1,
      delay: 1,

      ease: 'easeInOut',
      staggerChildren: 0.3,
      when: 'beforeChildren',
    },
  },
};

export const CardVariant = {
  hidden: { y: '20%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,

    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const TextVariant = {
  hidden2: { opacity: 0 },
  visible2: {
    opacity: 1,

    transition: {
      delay: 0.5,
      duration: 5,
      ease: 'easeOut',
    },
  },
};
