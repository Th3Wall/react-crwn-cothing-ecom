import styled from "styled-components";

export const CollectionPreviewWrp = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`

export const CollectionPreviewTitle = styled.h1`
    font-size: 28px;
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

export const Preview = styled.div`
    display: flex;
    justify-content: space-between;
`