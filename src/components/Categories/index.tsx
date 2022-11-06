import { useParams, useNavigate } from "react-router-dom";
import { NavBar, ButtonStyled } from "./styles";
import { ListContext } from "../../providers/categoriesRequest";
import React, { useContext, MouseEvent } from 'react'
import { ListType } from "../../providers/categoriesRequest";

export const Categories: React.FC = () => {

  const { categoriesRequest } = useContext(ListContext);

  const navigate = useNavigate();
  let { idCategory } = useParams();

  const handleClick = (ev: MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    idCategory = ev.currentTarget.id
    navigate(`/${idCategory}`);
  };

  return (
    <NavBar>
    {
      categoriesRequest?.map((category: ListType, index: number) => 
      <ButtonStyled
        color="secondary" 
        variant="contained" 
        onClick={handleClick} 
        key={index} 
        id={category.strCategory}
          >
            {category.strCategory}
      </ButtonStyled>
      )}
    </NavBar>
  );
};
