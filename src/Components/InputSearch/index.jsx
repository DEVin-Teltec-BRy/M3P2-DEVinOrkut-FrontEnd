import { Form } from "react-bootstrap";
import { NewButtom } from "../Button";
import { AiOutlineSearch } from "react-icons/ai";
import { FormSearch } from "./inputSearh.styled";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export const InputSearch = () => {
  const navigate = useNavigate();
  const refSearch = useRef(null);

  const searchResult = (event) => {
    event.preventDefault();
    const param = refSearch.current.value;
    navigate(`/search/${param}`);
    refSearch.current.value = "";
  };
  return (
    <FormSearch onSubmit={searchResult}>
      <Form.Control type="text" name="param" ref={refSearch} />
      <NewButtom type="submit">
        <AiOutlineSearch />
      </NewButtom>
    </FormSearch>
  );
};
