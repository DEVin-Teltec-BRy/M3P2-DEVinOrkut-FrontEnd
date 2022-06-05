import { Modal } from "react-bootstrap";
import { NewButton } from "../Button";

export const MainModal = ({ show, close, title,children,textButton }) => {

  return (
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          {children}
      </Modal.Body>
      <Modal.Footer>
        <NewButton onClick={close}>{textButton}</NewButton>
      </Modal.Footer>
    </Modal>
  );
};
