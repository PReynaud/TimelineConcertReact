import { useCallback } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { Show } from '../common/models/Show.model';

const WrappedTitle = styled.h2`
  color: red;
`;

interface TimelineCardProps {
  show: Show;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ show }: TimelineCardProps) => {
  const handleClick = useCallback(() => {
    console.log('click on button', show.id);
  }, []);

  return (
    <Container>
      <Row>
        <Col>left part</Col>
        <Col>
          <h3>Right part</h3>
          <Card>
            <Card.Body>
              <Card.Title>{show.band.name}</Card.Title>
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

export default TimelineCard;
