import React, { MouseEvent, useContext } from "react";
import { SearchContext } from "../../providers/search";
import { Form } from "./styles";
import { useParams, useNavigate } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';

export const InputSearch: React.FC = () => {
  
  const navigate = useNavigate();
  let { idValue } = useParams();
  
  const { search, setSearch } = useContext(SearchContext);

  const inputValue = React.useRef<HTMLInputElement>(null);

  const handleClick = (ev: MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    const value = inputValue.current?.value.toLowerCase();
    setSearch(value);
    idValue = value
    navigate(`${idValue}`);
  };

  return (
      <Form>
        <TextField color="secondary" placeholder="Search..." inputRef={inputValue} />
        <Button type="submit" onClick={handleClick}>
          <SearchIcon />
        </Button>
      </Form>
  );
};
