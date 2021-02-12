
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const InitialTransitionWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`

export const InitialTransitionBlackBox = styled(motion.div)`
    position: relative;
    z-index: 50;
    width: 100vw;
    background-color: #000000;
`