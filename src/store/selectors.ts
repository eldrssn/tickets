import { RootState } from './';

export const selectTickets = (state: RootState) => state.tickets;
export const selectFilters = (state: RootState) => state.filters;

export const selectCurracy = (state: RootState) => state.filters.currency;
export const selectStops = (state: RootState) => state.filters.stops;
