import { useState } from "react";
import { Pagination as Pag } from "react-bootstrap";

export const Pagination = ({ nro = 5, pageChange, index }) => {
  const [active, setActive] = useState(1);
  let items = [];
  const activeItem = (value) => {
    setActive(value);
  };
  for (let i = 1; i < nro + 1; i++) {
    items.push(
      <Pag.Item
        key={i}
        active={i === active}
        onClick={() => {
          activeItem(i);
          pageChange(i);
        }}
      >
        {i}
      </Pag.Item>
    );
  }
  console.log("items", items);
  return (
    <Pag size="sm">
      {index - 1 > 0 ? (
        <>
          <Pag.First
            onClick={() => {
              activeItem(1);
              pageChange(1);
            }}
          />
          <Pag.Prev
            onClick={() => {
              activeItem(index - 1);
              pageChange(index - 1);
            }}
          />
        </>
      ) : (
        <>
          <Pag.First disabled />
          <Pag.Prev disabled />
        </>
      )}
      {items.filter((item) => {
        if (item.key >= index && item.key < index + 5) return item;
        if (item.key > (nro-5) && (index+5) > nro) return item;
      })}
      {index + 1 <= nro ? (
        <>
          <Pag.Next
            onClick={() => {
              activeItem(index + 1);
              pageChange(index + 1);
            }}
          />
          <Pag.Last
            onClick={() => {
              activeItem(nro);
              pageChange(nro);
            }}
          />
        </>
      ) : (
        <>
          <Pag.Next disabled />
          <Pag.Last disabled />
        </>
      )}
    </Pag>
  );
};
