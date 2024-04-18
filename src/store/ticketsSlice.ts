import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setIdTickets } from '../utils/setIdTikets';

export interface Ticket {
  stops: number;
  price: number;
  origin_name: string;
  destination_name: string;
  origin: string;
  destination: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  id: string;
  carrier: 'S7' | 'TK' | 'SU' | 'BA';
}

interface TicketsState {
  tickets: Ticket[];
  loading: boolean;
  error: string | null;
}

const initialState: TicketsState = {
  tickets: [],
  loading: false,
  error: null,
};

export const fetchTickets = createAsyncThunk(
  'tickets/fetchTickets',
  async () => {
    const response = await fetch('/tickets.json');
    const data = await response.json();
    return setIdTickets(data.tickets);
  }
);

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.tickets = action.payload;
        state.loading = false;
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to load tickets';
      });
  },
});

export default ticketsSlice.reducer;
