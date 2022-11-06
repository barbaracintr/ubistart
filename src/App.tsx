import React from "react";

import { Drinks } from "./components/Drinks";
import { DrinkDetails } from "./components/DrinkDetails";
import { Home } from "./components/Home";
import { Header } from "./components/Header";

import { SearchsProvider } from "./providers/search";
import { DrinksProvider } from "./providers/drinks";

import { Routes, Route } from "react-router-dom";

import { CategoriesRequestProvider } from "./providers/categoriesRequest";

import { GlobalStyle } from "./styles/global";


export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <SearchsProvider>
        <CategoriesRequestProvider>
          <DrinksProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:id/*" element={<Drinks />} />
              <Route path="/details:id" element={<DrinkDetails />} />
            </Routes>
          </DrinksProvider>
        </CategoriesRequestProvider>
      </SearchsProvider>
    </>
  );
};
