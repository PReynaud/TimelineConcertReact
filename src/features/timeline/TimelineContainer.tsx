import { useCallback } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

const WrappedTitle = styled.h2`
  color: red;
`;

const TimelineContainer: React.FC = () => {
  const handleClick = useCallback(() => {
    console.log('click on button');
  }, []);

  return (
    <Container>
      <Row>
        <WrappedTitle>Timeline area</WrappedTitle>
      </Row>
      <Row>
        <Col>left part</Col>
        <Col>
          <h3>Right part</h3>
          <Card>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the cards
                content.
              </Card.Text>
              <Button variant="primary" onClick={handleClick}>
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TimelineContainer;
