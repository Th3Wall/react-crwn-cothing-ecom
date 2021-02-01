import styled from "styled-components";

export const Tile = styled.div`
    height: ${({size}) => (size ? '380px' : '240px')};
    min-width: 30%;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    margin: 0 7.5px 15px;
    overflow: hidden;

    &:hover {
        cursor: pointer;

        .bgImage {
            transform: scale(1.075);
        }

        .content {
            opacity: 0.9;
        }
    }

    &:first-child {
        margin-right: 7.5px;
    }

    &:last-child {
        margin-left: 7.5px;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const BGImage = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${({imageUrl}) => `url(${imageUrl})`};
    transition: transform 1.5s cubic-bezier(.19,1,.22,1);
`

export const TileContentWrp = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background-color: white;
    opacity: 0.7;
    position: absolute;
    transition: opacity 0.2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
`

export const TileTitle = styled.h1`
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
`

export const TileSubtitle = styled.span`
    font-weight: lighter;
    font-size: 16px;
`