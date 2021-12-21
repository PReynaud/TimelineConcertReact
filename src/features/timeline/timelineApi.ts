import ShowsData from '../../content/data.json';
import { Show, showfromJson } from '../common/models/Show.model';

// A mock function to mimic making an async request for data
export function fetchShows(): Promise<Show[]> {
  return new Promise((resolve) =>
    setTimeout(() => {
      const response = ShowsData.results.map(showfromJson);
      return resolve(response);
    }, 2000)
  );
}
