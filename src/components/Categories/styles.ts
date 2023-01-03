import styled from 'styled-components'
import { Button } from "@material-ui/core";

export const NavBar = styled.nav`
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 600px) {
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.1rem;
    }

    @media screen and (min-width: 700px) and (max-width: 1240px) {
        flex-wrap: wrap;
        gap: 0.5rem;
    }
`
export const ButtonStyled = styled(Button)`
    :focus{
        background-color: #000;
    }
    @media only screen and (max-width: 600px) {
        
    }
`