import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ResumeModal from './ResumeModal';
import { Table, Button } from 'react-bootstrap';

function ResumeHistory() {
  const [resumes, setResumes] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/resumes')
      .then((res) => setResumes(res.data))
      .catch((err) => console.error('Failed to fetch resume history.'));
  }, []);

  return (
    <>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>File Name</th>
            <th>Date</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {resumes.map((r) => (
            <tr key={r.id}>
              <td>{r.name}</td>
              <td>{r.email}</td>
              <td>{r.original_filename}</td>
              <td>{new Date(r.created_at).toLocaleString()}</td>
              <td>
                <Button onClick={() => setSelected(r.id)} size="sm">View</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {selected && (
        <ResumeModal
          id={selected}
          onHide={() => setSelected(null)}
        />
      )}
    </>
  );
}

export default ResumeHistory;
