import { BoxContainer } from "./styles";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Header } from "../Header";

const theme = createTheme({
  typography: {
    body1: {
      fontSize: '1.2rem',
      textAlign: 'center',
      fontFamily: 'Inter',
      color: '#808080'
    }
  }
});

export const Home: React.FC = () => {

  return (
    <>
    <Header />
    <BoxContainer>
      <ThemeProvider theme={theme}>
        <Typography variant="body1">Welcome to Watermelon Juice!</Typography>
      </ThemeProvider>
    </BoxContainer>
    </>
  );
};
