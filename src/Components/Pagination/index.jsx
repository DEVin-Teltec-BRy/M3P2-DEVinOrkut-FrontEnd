import { useState } from "react";
import { Pagination as Pag } from "react-bootstrap";

export const Pagination = ({ nro = 5, pageChange, index }) => {
  const [active, setActive] = useState(1);
  let items = [];
  const activeItem = (value) => {
    setActive(value);
  };
  for (let i = 1; i < nro+1; i++) {
    items.push(
      <Pag.Item key={i} active={i === active} onClick={() => {activeItem(i); pageChange(i)}}>
        {i}
      </Pag.Item>
    );
  }
  return <Pag size="sm">{items}</Pag>;
};
