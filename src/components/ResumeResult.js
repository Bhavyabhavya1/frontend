import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

function ResumeResult({ data }) {
  return (
    <Card className="mt-4">
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {data.email} | {data.phone} <br />
          {data.linkedin}
        </Card.Subtitle>

        <Card.Text>
          <strong>Summary:</strong> {data.summary}<br />
          <strong>Rating:</strong> {data.rating}/10<br />
          <strong>Feedback:</strong> {data.feedback}
        </Card.Text>

        <ListGroup className="mb-3">
          <ListGroup.Item><strong>Technical Skills:</strong> {data.skills_technical.join(', ')}</ListGroup.Item>
          <ListGroup.Item><strong>Soft Skills:</strong> {data.skills_soft.join(', ')}</ListGroup.Item>
          <ListGroup.Item><strong>Suggested Skills:</strong> {data.suggested_skills.join(', ')}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default ResumeResult;
