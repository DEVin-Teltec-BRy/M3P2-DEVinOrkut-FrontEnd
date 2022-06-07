import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import Upload from '../../Components/Upload';

const ModalUpload = (props) => {
  const handleClose = () => {};
  return (
    <>
      <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title>Escolha uma foto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Upload />
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
};

export default ModalUpload;
