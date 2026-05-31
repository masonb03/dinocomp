import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { Species } from '../types/species';

export interface QueueState {
  species: Species[];
}

const initialState: QueueState = {
  species: [],
};

const queueSlice = createSlice({
  name: 'queue',
  initialState,
  reducers: {
    addSpecies(state, action: PayloadAction<Species>) {
        if (state.species.length < 4) {
            state.species.push(action.payload);
        }
    },
    removeSpecies(state, action: PayloadAction<string>) {
      state.species = state.species.filter((item) => item.id !== action.payload);
    },
    clearQueue(state) {
      state.species = [];
    },
  },
});

export const { addSpecies, removeSpecies, clearQueue } = queueSlice.actions;
export default queueSlice.reducer;
