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

const TimelineContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { shows, isLoading } = useAppSelector((state) => state.timeline);

  useEffect(() => {
    dispatch(fetchShowsAsync());
  }, []);

  return (
    <Container>
      <Row>
        <WrappedTitle>Timeline area</WrappedTitle>
      </Row>
      {isLoading ? (
        <LoadingContainer />
      ) : (
        shows.map((show) => <TimelineCard show={show} key={show.id} />)
      )}
    </Container>
  );
};

export default TimelineContainer;
