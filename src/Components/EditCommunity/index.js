import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Form, Modal, ModalBody } from "react-bootstrap";
import { NewButton } from "../Button";
import { EDIT_COMMUNITY } from "../../Graphql/Mutations/EditCommunityMutations";

export const EditCommunity = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [editCommunity, { loading, error }] = useMutation(EDIT_COMMUNITY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <NewButton size="sm" onClick={handleShow}>
        editar
      </NewButton>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Comunidade</Modal.Title>
        </Modal.Header>
        <ModalBody>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              editCommunity({
                variables: {
                  input: {
                    // logo: colocar aqui o upload image,
                    name: name,
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
                placeholder="Alterar Nome"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="textArea">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                as="textarea"
                onChange={(e) => setDescription(e.target.value)}
                rows={2}
                placeholder="Alterar Descrição"
              />
            </Form.Group>
          </Form>
        </ModalBody>
        <Modal.Footer>
          <NewButton size="sm" onClick={handleClose}>
            Close
          </NewButton>
          <NewButton size="sm" onClick={editCommunity}>
            Save Changes
          </NewButton>
        </Modal.Footer>
      </Modal>
    </>
  );
};
