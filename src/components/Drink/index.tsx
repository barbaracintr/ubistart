import { Button, Typography } from "@material-ui/core";
import { MouseEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ListItem, ImgDrink, PaperStyled } from "./styles";

export const Drink = ({ drinkProps }: any) => {
  
  const navigate = useNavigate();
  let { userId } = useParams();

  const handleClick = (ev: MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    userId = ev.currentTarget.id
    navigate(`/details${userId}`);
  };

  return (
    <PaperStyled variant="outlined">
    <ListItem>

    <Button size="small" id={drinkProps.idDrink} onClick={handleClick}>
      <ImgDrink src={drinkProps.strDrinkThumb} />
    </Button>

      <Typography component='p'>{drinkProps.strDrink}</Typography>

      {drinkProps.strCategory !== undefined ? 
        <Typography color='secondary' component='span' variant="caption">{drinkProps.strCategory}</Typography> 
        :
        null
      }

      <Button size="small" id={drinkProps.idDrink} onClick={handleClick}>details</Button>
    </ListItem>
    </PaperStyled>
  );
};
