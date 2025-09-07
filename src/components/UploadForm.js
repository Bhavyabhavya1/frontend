import React, { useState } from 'react';
import axios from 'axios';
import ResumeResult from './ResumeResult';
import { Form, Button, Spinner, Alert } from 'react-bootstrap';

function UploadForm() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('resume', file);

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const res = await axios.post('http://localhost:5000/api/analyze-resume', formData);
      setResult(res.data);
    } catch (err) {
      setError('Failed to analyze resume. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-3">
      <Form onSubmit={handleUpload}>
        <Form.Group>
          <Form.Label>Select Resume (PDF only)</Form.Label>
          <Form.Control
            type="file"
            accept=".pdf"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </Form.Group>
        <Button className="mt-2" type="submit" disabled={loading}>
          {loading ? <Spinner animation="border" size="sm" /> : 'Analyze'}
        </Button>
      </Form>

      {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
      {result && <ResumeResult data={result} />}
    </div>
  );
}

export default UploadForm;
