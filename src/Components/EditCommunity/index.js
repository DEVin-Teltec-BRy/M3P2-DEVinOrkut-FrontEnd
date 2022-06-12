import { useMutation } from "@apollo/client";
import React, { useState, useMemo } from "react";
import { Form, Modal, ModalBody } from "react-bootstrap";
import { NewButton } from "../Button";
import { EDIT_COMMUNITY } from "../../Graphql/Mutations/EditCommunityMutations";
import camera from '../../Assets/camera.svg';
import './styles.css';

import { UploadImageCommunity } from "../UploadCommunity";


export const EditCommunity = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [logo, setLogo] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const preview = useMemo(() => {
    return logo ? URL.createObjectURL(logo) : null;
  }, [logo])
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
                    logo: logo,
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

            <Form.Group className="mb-3" controlId="textArea">
            <label>Adicionar nova Logo</label>

              <label id="logo"
                style={{ backgroundImage: `url(${preview})` }}
                className={logo ? 'has-logo' : ''}>
                <input type="file" onChange={event => setLogo(event.target.files[0])}></input>
                <img src={camera} alt="Select img"></img>

              </label>
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
