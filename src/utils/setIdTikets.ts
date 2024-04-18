import { v4 as uuidv4 } from 'uuid';
import { Ticket } from '../store/ticketsSlice';

export const setIdTickets = (tickets: Ticket[]) =>
  tickets.map((ticket) => ({
    ...ticket,
    id: uuidv4(),
  }));
