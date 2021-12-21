import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Show } from '../common/models/Show.model';
import { fetchShows } from './timelineApi';

export interface TimelineState {
  shows: Show[];
  isLoading: boolean;
}

const initialState: TimelineState = {
  shows: [],
  isLoading: false
};

export const fetchShowsAsync = createAsyncThunk(
  'timeline/fetchShows',
  async (): Promise<Show[]> => {
    return await fetchShows();
  }
);

export const timelineSlice = createSlice({
  name: 'timeline',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    console.log('save extra reducers');
    builder
      .addCase(fetchShowsAsync.pending, (state) => {
        console.log('extra reducers');
        state.isLoading = true;
      })
      .addCase(fetchShowsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.shows = action.payload;
      });
  }
});

export default timelineSlice.reducer;
