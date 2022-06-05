import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Form } from "react-bootstrap";
import { useData } from "../../Context/dataContext";

const CATEGORY_ENUM = gql`
  query {
    __type(name: "Category") {
      name
      enumValues {
        name
      }
    }
  }
`;

export const CategoryEnum = () => {
  const { data, loading, error } = useQuery(CATEGORY_ENUM);
  const { setCategory } = useData();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Form.Select
      aria-label="Default select example"
      onChange={(e) => setCategory(e.target.value)}
    >
      <option>Open this select menu</option>
      {data.__type.enumValues.map(({ name }) => (
        <option key={name} value={name}>
          {name}
        </option>
      ))}
    </Form.Select>
  );
};
