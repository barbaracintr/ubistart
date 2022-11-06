import styled from 'styled-components'
import { Paper } from "@material-ui/core";

export const ListItem = styled.li`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 15rem;
    padding: 0.5rem;
`
export const ImgDrink = styled.img`
    width: 10rem;
    heigth: 10rem;
    border-radius: 3px;
`
export const PaperStyled = styled(Paper)`
    margin: 0.2rem;
    display: flex;
    align-items: center;
`