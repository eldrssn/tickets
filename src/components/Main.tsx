import { FiltersList } from './FiltersList';
import { TicketList } from './TicketList';
import styles from './Main.module.css';

export const Main = () => (
  <main className={styles.main}>
    <div className={styles.logo_box}>
      <img src="/images/logo.jpg" alt="Logo" width={123} height={122} />
    </div>
    <FiltersList />
    <TicketList />
  </main>
);
