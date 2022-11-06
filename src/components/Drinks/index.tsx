import { useContext } from "react";
import { DrinksContext } from "../../providers/drinks";
import { DrinksList } from "./styles";
import { DrinkType } from "./drinkType"
import { Drink } from "../Drink";
import { Home } from "../Home";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Header } from "../Header";

const theme = createTheme({
  typography: {
    subtitle1: {
      fontSize: '1.5rem',
      textAlign: 'center',
      fontStyle: 'italic',
      color: '#d3d3d3'
    }
  }
});

export const Drinks = () => {

  const { drinksList } = useContext(DrinksContext);
  return (
    <>
      <Header />
      {drinksList === null ?
        <ThemeProvider theme={theme}>
          <Typography variant="subtitle1">No drinks found</Typography>
        </ThemeProvider>
        :

        drinksList !== undefined ?

          <DrinksList>
            {
              drinksList?.map((drink: DrinkType) =>
                <Drink key={drink.idDrink} drinkProps={drink} />)
            }
          </DrinksList>

          :
          <Home />
      }
    </>
  );
};
