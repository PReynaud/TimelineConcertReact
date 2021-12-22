import React from 'react';
import { Counter } from './features/counter/Counter';
import { Container, Row, Col } from 'react-bootstrap';
import CustomNavbar from './features/navbar/Navbar';
import TimelineContainer from './features/timeline/TimelineContainer';
import FiltersContainer from './features/filters/FiltersContainer';

const App: React.FC = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <CustomNavbar />
        </Col>
      </Row>
      <Row>
        <Container fluid>
          <Row>
            <Col md={4} className="d-none d-md-block">
              <FiltersContainer />
            </Col>
            <Col xs={12} md={8}>
              <TimelineContainer />
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
};

export default App;

// eslint-disable-next-line
function BackupApp() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer">
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer">
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer">
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer">
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}
