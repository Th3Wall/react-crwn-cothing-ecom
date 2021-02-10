import styled from "styled-components";
import { motion } from 'framer-motion';

export const CollectionPreviewWrp = styled(motion.div)`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;

    @media screen and (max-width: 1024px) {
        align-items: center;
    }
`

export const CollectionPreviewTitle = styled(motion.h1)`
    font-size: 36px;
    margin-bottom: 25px;
    font-weight: 600;
    margin-top: 1.5em;
    transition: all 300ms cubic-bezier(0.25, 0.45, 0.45, 0.95);

    &:hover {
        color: grey;
        cursor: pointer;
        transform: translateX(2px);
    }
`

export const Preview = styled(motion.div)`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1024px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 40px 30px;
    }
`