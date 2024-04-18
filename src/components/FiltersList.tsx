import { StopsFilter } from './StopsFilter';
import { CurrancyFilter } from './CurrancyFilter';
import styles from './FiltersList.module.css';

export const FiltersList = () => (
  <aside className={styles.filters}>
    <CurrancyFilter />
    <StopsFilter />
  </aside>
);
