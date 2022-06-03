
import { Form } from "react-bootstrap";
import { NewButtom } from "../Button";
import { AiOutlineSearch } from "react-icons/ai";
import { FormSearch } from "./inputSearh.styled";
import { useRef } from "react";


export const InputSearch = ({setParam}) => {
  const refSearch = useRef(null);

  const searchResult = (event) => {
    event.preventDefault();
    const param = refSearch.current.value;
    setParam(param)
    refSearch.current.value =''
  };
  return (
    <FormSearch onSubmit={searchResult}>
      <Form.Control type="text" name="param" ref={refSearch} />
      <NewButton type="submit">
        <AiOutlineSearch />
      </NewButton>
    </FormSearch>
  );
};
