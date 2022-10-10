import { configureStore } from '@reduxjs/toolkit';
import { deckApi } from '../queries/deckQuery';
import { deckMetaSlice } from './deckSlice';

export const store = configureStore({
  reducer: {
    [deckApi.reducerPath]: deckApi.reducer,
    deckMetaState: deckMetaSlice.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(deckApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch