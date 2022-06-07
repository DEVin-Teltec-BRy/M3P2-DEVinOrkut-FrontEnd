import React from 'react';
import { Modal } from 'react-bootstrap';
import Upload from '../../Components/Upload';

const ModalUpload = (props) => {
  return (
    <>
      <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title>Escolha uma foto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Upload />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUpload;
