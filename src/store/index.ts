import { configureStore } from '@reduxjs/toolkit';
import ticketsReducer from './ticketsSlice';
import filtersReducer from './filtersSlice';

export const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    filters: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
