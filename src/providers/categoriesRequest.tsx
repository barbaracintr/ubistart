import React, { ReactNode, createContext, useEffect, useState } from "react";

type CategoriesRequestProvider = {
    children: ReactNode;
};

type PropsCategorieProviderContext = {
    categoriesRequest: ListType[];
    setCategoriesRequest: React.Dispatch<React.SetStateAction<ListType[]>>;
};

export interface ListType {
    strCategory: string
};

const DefaultValue = {
    categoriesRequest: [],
    setCategoriesRequest: () => {}
}

export const ListContext = createContext<PropsCategorieProviderContext>(DefaultValue);

export const CategoriesRequestProvider = ({ children }: CategoriesRequestProvider) => {

    const [ categoriesRequest, setCategoriesRequest ] = useState<ListType[]>(DefaultValue.categoriesRequest);
    
    const categoriesRequestList = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
    const getListDrinks = () => {
        fetch(categoriesRequestList)
            .then((response) => {
                response.json().then((data) => {
                    setCategoriesRequest(data.drinks);
                });
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getListDrinks();
    }, []);

    return (
        <ListContext.Provider value= {{ categoriesRequest, setCategoriesRequest }}>
            { children }
        </ListContext.Provider>
  );
};
