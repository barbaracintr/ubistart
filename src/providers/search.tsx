import React, { ReactNode, createContext, useEffect, useState } from "react";
import { DrinkType } from "../components/Drinks/drinkType";

import { baseUrl, urlSearch } from "../url";

type SearchProvider = {
  children: ReactNode;
};

type PropsSearchContext = {
  search: string | undefined ;
  setSearch: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const DefaultValue = {
  search: '',
  setSearch: () => {}
};

export const SearchContext = createContext<PropsSearchContext>(DefaultValue);

export const SearchsProvider = ({ children }: SearchProvider) => {

  const [search, setSearch] = useState<string | undefined>(DefaultValue.search);

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
