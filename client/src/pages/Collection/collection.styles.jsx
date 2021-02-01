import styled from "styled-components";

export const CollectionWrp = styled.div`
    display: flex;
    flex-direction: column;
`

export const CollectionTitle = styled.h2`
    font-size: 38px;
    margin: 0 auto;
    margin-bottom: 50px;
`

export const CollectionList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

    & > div {
        margin-bottom: 40px;
    }
`