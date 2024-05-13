/* eslint-disable react/prop-types */
import { Modal, Button } from 'react-bootstrap';

const AddBestSellingModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add Best Selling</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Add Best Selling Form */}
        <p>Add Best Selling Form Goes Here</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={onHide}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddBestSellingModal;
