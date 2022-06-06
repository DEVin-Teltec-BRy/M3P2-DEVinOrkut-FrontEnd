import { Modal } from "react-bootstrap";

export const MainModal = ({ show, close, title,children }) => {

  return (
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          {children}
      </Modal.Body>
      
    </Modal>
  );
};
