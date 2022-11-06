import styled from 'styled-components'
import { Link } from "react-router-dom"

export const BoxHeader = styled.header`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    padding: 1rem;
    border-bottom: 1px solid #d3d3d3;
`
export const BoxSearch = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    padding: 1rem;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
        gap: 2rem;
        padding: 2rem;
        justify-content: center;
    }
`
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000;
`;
export const ImgLogo = styled.img`
    width: 12rem;
`