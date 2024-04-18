import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Currency = 'RUB' | 'USD' | 'EUR';

interface CurrencyRates {
  RUB: { value: number; sign: string };
  USD: { value: number; sign: string };
  EUR: { value: number; sign: string };
}

interface FiltersState {
  currency: Currency;
  stops: number[];
  currencyRates: CurrencyRates;
}

const initialState: FiltersState = {
  currency: 'RUB',
  stops: [],
  currencyRates: {
    RUB: { value: 1, sign: '₽' },
    USD: { value: 95, sign: '$' },
    EUR: { value: 100, sign: '€' },
  },
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<'RUB' | 'USD' | 'EUR'>) => {
      state.currency = action.payload;
    },
    setStops: (state, action: PayloadAction<number[]>) => {
      state.stops = action.payload;
    },
    setCurrencyRates: (state, action: PayloadAction<CurrencyRates>) => {
      state.currencyRates = action.payload;
    },
  },
});

export const { setCurrency, setStops, setCurrencyRates } = filtersSlice.actions;
export default filtersSlice.reducer;
