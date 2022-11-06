import React, { ReactNode, createContext, useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { DrinkType } from "../components/Drinks/drinkType";
import { baseUrl, urlFilter, urlSearch } from "../url";
import { ListContext } from "./categoriesRequest";
import { SearchContext } from "./search";
import { useNavigate } from "react-router-dom";

type DrinkProvider = {
  children: ReactNode;
};

type PropsDrinksContext = {
  drinksList: DrinkType[];
  setDrinksList: React.Dispatch<React.SetStateAction<DrinkType[]>>;
};

const DefaultValue = {
  drinksList: [],
  setDrinksList: () => {}
};

export const DrinksContext = createContext<PropsDrinksContext>(DefaultValue);

export const DrinksProvider = ({ children }: DrinkProvider) => {

  const { search, setSearch } = useContext(SearchContext)
  const { categoriesRequest} = useContext(ListContext)

  const [drinksList, setDrinksList] = useState<DrinkType[]>(DefaultValue.drinksList);

  const [endPoint, setEndPoint] = useState<string>("");
  
  const location = useLocation();

  const navigate = useNavigate();

  const getDrinkList = (location: string) => {
    if (location === "/" || location === "") return;

    if (search !== '' ) {
      setEndPoint(`${baseUrl}${urlSearch}${search}`)
      setSearch('')
    } else {
      setEndPoint(`${baseUrl}${urlFilter}${location}`)
    }
   
    fetch(endPoint)
      .then((response) => {
        response.json().then((data) => {
          setDrinksList(data.drinks);
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const way = location.pathname.replace('/','')
    getDrinkList(way);
  }, [search, location, endPoint]);

  return (
    <DrinksContext.Provider value={{ drinksList, setDrinksList }}>
      {children}
    </DrinksContext.Provider>
  );
};
