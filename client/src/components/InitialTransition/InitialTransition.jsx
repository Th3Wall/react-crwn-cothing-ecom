import { InitialTransitionBlackBox, InitialTransitionWrapper } from './InitialTransition.styles';

const blackBox = {
  initial: {
    height: "100vh",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      duration: 1,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const InitialTransition = () => {
  return (
    <InitialTransitionWrapper>
      <InitialTransitionBlackBox
        initial="initial"
        animate="animate"
        variants={blackBox}
      />
    </InitialTransitionWrapper>
  );
};

export default InitialTransition;