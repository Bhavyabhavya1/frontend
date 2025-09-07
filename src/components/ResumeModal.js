import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal, Spinner } from 'react-bootstrap';
import ResumeResult from './ResumeResult';

function ResumeModal({ id, onHide }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/resumes/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.error('Failed to fetch details.'));
  }, [id]);

  return (
    <Modal show onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Resume Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {data ? <ResumeResult data={data} /> : <Spinner animation="border" />}
      </Modal.Body>
    </Modal>
  );
}

export default ResumeModal;
