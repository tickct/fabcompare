import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './index';

interface DeckMetaState {
  DeckCodes: string[]
};

const initialState: DeckMetaState = {
  DeckCodes: []
}

const addDeckCode = (state: DeckMetaState,action: PayloadAction<string>) => {
  if(!state.DeckCodes.find((code: string) => code === action.payload)){
    state.DeckCodes = [...state.DeckCodes, action.payload];
  };
}

const removeDeckCode = ((state: DeckMetaState, action: PayloadAction<string>) => { state.DeckCodes = state.DeckCodes.filter(deckCode => deckCode !== action.payload)});

export const deckMetaSlice = createSlice({
  name: 'deckMetaState',
  initialState,
  reducers: {
    add: addDeckCode,
    remove: removeDeckCode
  }
})

export const { add, remove } = deckMetaSlice.actions;
export const selectDecks = (state: RootState) => state.deckMetaState.DeckCodes;

export default deckMetaSlice.reducer