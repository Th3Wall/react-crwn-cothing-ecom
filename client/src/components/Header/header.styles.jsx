import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
    transition: all 300ms cubic-bezier(0.25, 0.45, 0.45, 0.95);

    @media screen and (max-width: 1024px) {
        height: 60px;
        padding: 10px;
        margin-bottom: 20px;
    }
`

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 1024px) {
        width: 80%;
    }
`

export const LogoContainer = styled(Link)`
    width: 70px;
    transition: width 300ms cubic-bezier(0.25, 0.45, 0.45, 0.95);

    @media screen and (max-width: 1024px) {
        width: 50px;
    }
`

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`