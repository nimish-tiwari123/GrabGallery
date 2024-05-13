/* eslint-disable react/prop-types */
import { Modal, Button } from 'react-bootstrap';
import { deleteVector } from '../../../../../assets';
const DeleteModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={deleteVector} alt="" className='w-50 d-block m-auto' />
        <p className='text-center fs-5'>Are you sure you want to delete this product?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button className='bg-secondary-subtle text-secondary border' onClick={onHide}>
          Cancel
        </Button>
        <Button variant="danger" onClick={onHide}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
