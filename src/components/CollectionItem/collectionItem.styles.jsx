import styled from 'styled-components';
import Button from '../Button/Button';

export const AddToCartButton = styled(Button)`
    width: 80%;
    opacity: 1;
    position: absolute;
    top: 255px;
    display: none;
    border-radius: 8px;
`

export const CollectionItemContainer = styled.div`
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