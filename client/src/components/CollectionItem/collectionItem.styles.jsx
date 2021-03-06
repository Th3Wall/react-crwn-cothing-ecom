import styled from 'styled-components';
import Button from '../Button/Button';
import { motion } from 'framer-motion';

export const AddToCartButton = styled(Button)`
    width: 80%;
    opacity: 1;
    position: absolute;
    top: 255px;
    display: none;

    @media screen and (max-width: 1024px) {
        display: block;
        opacity: 0.9;
        min-width: unset;
        padding: 0 10px;
    }
`

export const CollectionItemContainer = styled(motion.div)`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    &:hover {
        .image {
            opacity: 0.8;
        }

        button {
            display: flex;
        }
    }

    @media screen and (max-width: 1024px) {
        width: 40vw;

        &:hover {
            .image {
                opacity: unset;
            }
            button {
                opacity: unset;
            }
        }
    }
`

export const BackgroundImage = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    border-radius: 12px;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`

export const CollectionFooterContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`

export const NameContainer = styled.span`
    width: 90%;
    margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
    width: 10%;
    text-align: right;
`;