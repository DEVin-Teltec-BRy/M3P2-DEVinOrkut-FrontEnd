import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";

export function ModalComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <Form>
            <Form.Group className="mb-3" controlId="nameInput">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="field"
                placeholder="Ex: Amigos de Elon Musk"
                autoFocus
              />
            </Form.Group>
            <Form.Group controlId="uploadFile" className="mb-3">
              <Form.Label>Logo</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="select">
              <Form.Label>Categoria</Form.Label>
              <Form.Select size="sm">
                <option>FAMOSOS</option>
                <option>DIVERSOS</option>
                <option>GAMES</option>
                <option>GASTRONOMIA</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="textArea">
              <Form.Label>
                Escreva uma descrição para a sua comunidade.
              </Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
