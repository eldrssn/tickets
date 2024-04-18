import { useSelector } from 'react-redux';

import { RootState } from '../store';
import { Ticket } from '../store/ticketsSlice';
import { Currency } from '../store/filtersSlice';
import { getFormattedDate } from '../utils/getFormattedDate';

import S7 from '/images/s7.webp';
import TK from '/images/Turkish-Airlines-Logo.png';
import SU from '/images/su.png';
import BA from '/images/British_Airways.png';

import styles from './TicketCard.module.css';

const airlineLogos = {
  S7,
  TK,
  SU,
  BA,
};

export const TicketCard: React.FC<{ ticket: Ticket }> = ({ ticket }) => {
  const { currencyRates, currency } = useSelector(
    (state: RootState) => state.filters
  );

  const calculatePrice = (price: number, currency: Currency): string => {
    const rate = currencyRates[currency];
    const newPrice = price / rate.value;

    return `${newPrice.toFixed()} ${rate.sign}`;
  };

  const displayPrice = calculatePrice(ticket.price, currency);

  return (
    <article className={styles.ticket}>
      <div className={styles.action_box}>
        <div className={styles.airline_logo}>
          <img
            height={50}
            width={150}
            src={airlineLogos[ticket.carrier]}
            alt="Airline Logo"
          />
        </div>
        <button type="button" className={styles.button_buy}>
          Купить <br /> за {displayPrice}
        </button>
      </div>

      <div className={styles.info_box}>
        <div className={styles.duration}>
          <div className={styles.time}>{ticket.departure_time}</div>
          <div className={styles.stops}>
            {ticket.stops === 0
              ? 'Без пересадок'
              : `${ticket.stops} пересадк${ticket.stops > 1 ? 'и' : 'а'}`}
          </div>
          <div className={styles.time}>{ticket.arrival_time}</div>
        </div>

        <div className={styles.details}>
          <div className={styles.details_departure}>
            <p className={styles.name}>
              {ticket.origin}, {ticket.origin_name}
            </p>
            <p className={styles.date}>
              {getFormattedDate(ticket.departure_date)}
            </p>
          </div>
          <div className={styles.details_arrival}>
            <p className={styles.name}>
              {ticket.destination}, {ticket.destination_name}
            </p>
            <p className={styles.date}>
              {getFormattedDate(ticket.arrival_date)}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
