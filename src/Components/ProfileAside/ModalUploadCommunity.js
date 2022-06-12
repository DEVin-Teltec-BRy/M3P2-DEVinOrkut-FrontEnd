import React from 'react';
import { Modal } from 'react-bootstrap';
import {UploadImageCommunity} from '../UploadCommunity';

const ModalUploadCommunity = (props) => {
  return (
    <>
      <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title>Escolha uma foto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UploadImageCommunity />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUploadCommunity;
