import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";
import { gql, useMutation } from "@apollo/client";
import { CategoryEnum } from "./CategoryEnum";
import { useData } from "../../Context/dataContext";

export const CREATE_COMMUNITY = gql`
  mutation CreateCommunity($input: CommunityInput) {
    createCommunity(input: $input) {
      id
      logo
      name
      description
      category
      creation_date
    }
  }
`;

export function ModalComponent() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { category } = useData();

  const [createCommunity, { loading, error }] = useMutation(CREATE_COMMUNITY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <Button variant="link" onClick={handleShow}>
        Criar Comunidade
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Criar Comunidade</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              createCommunity({
                variables: {
                  input: {
                    logo: "https://thumbs.dreamstime.com/b/o-homem-irado-na-camisa-vermelha-rasga-folha-de-papel-6582601.jpg",
                    name: name,
                    category: category,
                    description: description,
                  },
                },
              });
            }}
          >
            <Form.Group className="mb-3" controlId="nameInput">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="field"
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Amigos de Elon Musk"
                autoFocus
              />
            </Form.Group>
            <Form.Group controlId="uploadFile" className="mb-3">
              <Form.Label>Logo</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <CategoryEnum />
            <Form.Group className="mb-3" controlId="textArea">
              <Form.Label>
                Escreva uma descrição para a sua comunidade.
              </Form.Label>
              <Form.Control
                as="textarea"
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalComponent;
