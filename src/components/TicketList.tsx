import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { fetchTickets } from '../store/ticketsSlice';
import { useAppDispatch } from '../store/hooks';
import { selectFilters, selectTickets } from '../store/selectors';
import { TicketCard } from './TicketCard';

import styles from './TicketList.module.css';

export const TicketList = () => {
  const dispatch = useAppDispatch();
  const { tickets, loading } = useSelector(selectTickets);

  const { stops, currency } = useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  const filteredTickets = tickets.filter((ticket) => {
    const currencyFilter = currency === 'RUB' || ticket.price;
    const stopsFilter = stops.length === 0 || stops.includes(ticket.stops);

    return currencyFilter && stopsFilter;
  });

  return (
    <div className={styles.tickets_list}>
      {loading && <p>Загрузка...</p>}

      {filteredTickets?.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};
