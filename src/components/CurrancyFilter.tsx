import { useDispatch, useSelector } from 'react-redux';

import { Currency, setCurrency } from '../store/filtersSlice';
import { selectCurracy } from '../store/selectors';
import styles from './CurrancyFilter.module.css';

export const CurrancyFilter = () => {
  const dispatch = useDispatch();
  const currency = useSelector(selectCurracy);

  const handleCurrencyChange = (cur: Currency) => {
    dispatch(setCurrency(cur));
  };
  return (
    <div className={styles.currency_selector}>
      <p className={styles.title}>Валюта</p>
      {(['RUB', 'USD', 'EUR'] as Currency[]).map((cur) => (
        <button
          className={styles.currency_button}
          key={cur}
          onClick={() => handleCurrencyChange(cur)}
          disabled={currency === cur}
        >
          {cur}
        </button>
      ))}
    </div>
  );
};
