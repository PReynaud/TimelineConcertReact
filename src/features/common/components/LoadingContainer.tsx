import { Container, Spinner } from 'react-bootstrap';

const LoadingContainer: React.FC = () => {
  return (
    <Container fluid>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  );
};

export default LoadingContainer;
