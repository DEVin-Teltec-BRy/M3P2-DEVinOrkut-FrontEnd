import React from "react";
import { useQuery } from "@apollo/client";
import { Form } from "react-bootstrap";
import { useData } from "../../Context/dataContext";
import { CATEGORY_ENUM } from "../../Graphql/Querys/Communities";

export const SelectCategoryEnum = () => {
  const { data, loading, error } = useQuery(CATEGORY_ENUM);
  const { setCategoryEnum } = useData();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <Form.Select onChange={(e) => setCategoryEnum(e.target.value)}>
      <option>Escolha a categoria</option>
      {data.__type.enumValues.map(({ name }) => (
        <option key={name} value={name}>
          {name}
        </option>
      ))}
    </Form.Select>
  );
};
