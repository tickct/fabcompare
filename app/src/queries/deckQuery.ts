import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Deck } from '../types.d';

export const deckApi = createApi({
  reducerPath: 'decks',
  baseQuery: fetchBaseQuery({
    baseUrl: '/deck'
  }),
  endpoints: (builder) => ({
    getDeck: builder.query<Deck, string>({
      query: (deckID) => `/${deckID}`
    }),
    getDecks: builder.query<Deck[], string[]>({
      query: (deckIDs) => {
        const queryString = deckIDs.map(deckID => `deck=${deckID}`).join('&');
        return `/?${queryString}`
      }
    })
  })
});


export const { useGetDeckQuery, useGetDecksQuery } = deckApi;
