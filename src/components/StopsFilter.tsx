import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setStops } from '../store/filtersSlice';
import { selectStops } from '../store/selectors';
import styles from './StopsFilter.module.css';

export const StopsFilter: React.FC = () => {
  const STOPS_LIST = [0, 1, 2, 3];
  const dispatch = useDispatch();
  const selectedStops = useSelector(selectStops);

  const handleStopChange = (stop: number) => {
    const newSelectedStops = selectedStops.includes(stop)
      ? selectedStops.filter((s) => s !== stop)
      : [...selectedStops, stop];
    dispatch(setStops(newSelectedStops));
  };

  const handleOneStopChange = (stop: number) => {
    dispatch(setStops([stop]));
  };

  const handleAllStops = () => {
    if (selectedStops.length === 4) {
      dispatch(setStops([]));
    } else {
      dispatch(setStops(STOPS_LIST));
    }
  };

  return (
    <div className={styles.filterContainer}>
      <p className={styles.title}>Количество пересадок</p>
      <label className={styles.filterLabel}>
        <input
          className={styles.filterCheckbox}
          type="checkbox"
          checked={selectedStops.length === 4 || selectedStops.length === 0}
          onChange={handleAllStops}
        />
        Все
      </label>
      {STOPS_LIST.map((stop) => (
        <label key={stop} className={styles.filterLabel}>
          <input
            className={styles.filterCheckbox}
            type="checkbox"
            checked={selectedStops.includes(stop)}
            onChange={() => handleStopChange(stop)}
          />
          {stop === 0
            ? 'Без пересадок'
            : `${stop} пересадк${stop === 1 ? 'a' : 'и'}`}

          <button
            className={styles.button_one}
            type="button"
            onClick={() => handleOneStopChange(stop)}
          >
            Только
          </button>
        </label>
      ))}
    </div>
  );
};
