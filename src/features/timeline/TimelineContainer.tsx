import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import LoadingContainer from '../common/components/LoadingContainer';
import TimelineCard from './TimelineCard';
import { fetchShowsAsync } from './timelineSlice';

const WrappedTitle = styled.h2`
  color: red;
`;

const Timeline = styled.div`
  position: relative;
  margin: 0 auto;

  &:after {
    content: '';
    position: absolute;
    width: 5px;
    background-color: red;
    top: 5px;
    bottom: 0;
    left: 33%;
    margin-left: -2px;
  }
`;

const TimelineContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { shows, isLoading } = useAppSelector((state) => state.timeline);

  useEffect(() => {
    dispatch(fetchShowsAsync());
  }, []);

  return (
    <>
      <Row>
        <WrappedTitle>Timeline area</WrappedTitle>
      </Row>
      <Container fluid>
        {isLoading ? (
          <LoadingContainer />
        ) : (
          <Timeline>
            {shows.map((show) => (
              <TimelineCard show={show} key={show.id} />
            ))}
          </Timeline>
        )}
      </Container>
    </>
  );
};

export default TimelineContainer;
