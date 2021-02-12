import styled from "styled-components";
import { motion } from 'framer-motion';

export const SignInOutWrapper = styled(motion.div)`
    width: 75vw;
    display: flex;
    justify-content: space-around;
    margin: 30px auto;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        width: 90%;
    }
`