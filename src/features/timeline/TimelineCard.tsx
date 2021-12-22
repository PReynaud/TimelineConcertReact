import { useCallback, useMemo } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { displayDateFromString } from '../../utils/date.utils';
import { Show } from '../common/models/Show.model';

const DateDisplay = styled.h4`
  float: right;
  font-size: 16px;
  line-height: 32px;
`;

const TimelineItemContainer = styled(Container)`
  margin-bottom: 10px;
`;

const LeftCol = styled(Col)`
  padding-right: 30px;
`;

const RightCol = styled(Col)`
  padding-left: 20px;
`;

const TimelineItemCircle = styled.div`
  padding: 0px 40px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -37px; // 7px + value of padding-right in LeftCol
    background-color: white;
    border: 4px solid red;
    top: 5px;
    border-radius: 50%;
    z-index: 1;
  }
`;

interface TimelineCardProps {
  show: Show;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ show }: TimelineCardProps) => {
  const handleClick = useCallback(() => {
    console.log('click on button', show.id);
  }, []);

  const dateDisplayed = useMemo(() => displayDateFromString(show.date), [show.date]);

  return (
    <TimelineItemContainer>
      <Row>
        <LeftCol xs={4}>
          <DateDisplay>{dateDisplayed}</DateDisplay>
          <TimelineItemCircle />
        </LeftCol>
        <RightCol xs={8}>
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
        </RightCol>
      </Row>
    </TimelineItemContainer>
  );
};

export default TimelineCard;
