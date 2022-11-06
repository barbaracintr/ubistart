import styled from 'styled-components'
import { Paper, Typography } from "@material-ui/core";

interface Props {
    textalign: string | null 
}
  
export const PaperStyled = styled(Paper)`
    margin: 0 auto;
    margin-top: 15vh;
    width: 40%;
    padding: 2rem;

    @media only screen and (max-width: 600px) {
        width: 90%;
    }

    @media screen and (min-width: 700px) and (max-width: 1240px) {
        width: 90%;
    }
`
export const BoxDetails = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }

    @media screen and (min-width: 700px) and (max-width: 1240px) {
        flex-direction: column;
    }
`
export const BoxFrist = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
export const ImgDetails = styled.img`
    width: 50%;
    border-radius: 0.3rem;
    padding: 0.1rem;
    border: 1px solid #d3d3d3;
    margin: 0 auto;

    @media only screen and (max-width: 600px) {
        width: 90%;
    }

    @media screen and (min-width: 700px) and (max-width: 1240px) {
        width: 90%;
    }
`
export const BoxIngredients = styled.ul`
    display: flex
    flex-direction: column;
    border-left: 1px solid #d3d3d3;
    padding: 1rem;

    @media only screen and (max-width: 600px) {
        border: none;
        text-align: center;
    }

    @media screen and (min-width: 700px) and (max-width: 1240px) {
        border: none;
        text-align: center;
        padding: 0.2rem;
    }
`
export const TypographyStyled = styled(Typography)<Props>`
    text-align: ${props => props.textalign};

    @media only screen and (max-width: 600px) {
        text-align: center;
    }

    @media screen and (min-width: 700px) and (max-width: 1240px) {
        text-align: center;
    }
`
export const Item = styled.li`
    margin: 0.1rem;
`