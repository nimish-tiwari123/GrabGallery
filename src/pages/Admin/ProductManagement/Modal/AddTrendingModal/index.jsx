/* eslint-disable react/prop-types */
import { Modal, Button } from 'react-bootstrap';

const AddTrendingModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add Trending</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Add Trending Form */}
        <p>Add Trending Form Goes Here</p>
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

export default AddTrendingModal;
