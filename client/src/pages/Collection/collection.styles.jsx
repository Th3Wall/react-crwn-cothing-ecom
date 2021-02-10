import styled from "styled-components";
import { motion } from 'framer-motion';

export const CollectionWrp = styled(motion.div)`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const CollectionTitle = styled(motion.h2)`
    font-size: 38px;
    margin: 0 auto;
    margin-bottom: 50px;
`

export const CollectionList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 40px;

    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 40px 30px;
    }
`