import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { CategoryEnum } from "./CategoryEnum";
import { useData } from "../../Context/dataContext";
import { CREATE_COMMUNITY } from "../../Graphql/Querys/Communities";

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
                    logo: "https://img.freepik.com/free-vector/flat-design-no-photo-sign_23-2149271199.jpg?w=996&t=st=1654375825~exp=1654376425~hmac=7eaad2883abb5b372e581161b19d84f9b0efba1669fbb08271f8c2f6bfae1f63",
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
