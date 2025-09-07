import React from 'react';
import UploadForm from './components/UploadForm';
import ResumeHistory from './components/ResumeHistory';
import { Container, Tabs, Tab } from 'react-bootstrap';

function App() {
  return (
    <Container className="mt-4">
      <h1 className="mb-4">Resume Analyzer</h1>
      <Tabs defaultActiveKey="upload" id="resume-tabs">
        <Tab eventKey="upload" title="Live Resume Analysis">
          <UploadForm />
        </Tab>
        <Tab eventKey="history" title="Historical Viewer">
          <ResumeHistory />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default App;
