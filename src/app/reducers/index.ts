import { Currency } from '../models/currency';
import * as fromAmount from './amount';
import * as fromCurrency from './currency';

export const reducers = {
    amount: fromAmount.reducer,
    currencies: fromCurrency.reducer
};

// selectors
export const getAmountState = (state: State) => state.amount;
export const getCurrencyRates = (state: State) => state.currencies;

export interface State {
    amount: number;
    currencies: Currency[];
}


