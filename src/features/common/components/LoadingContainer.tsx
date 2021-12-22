import { Container, Spinner } from 'react-bootstrap';

const LoadingContainer: React.FC = () => {
  return (
    <Container fluid className="w-100 h-100 d-flex justify-content-center align-items-center">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  );
};

export default LoadingContainer;
