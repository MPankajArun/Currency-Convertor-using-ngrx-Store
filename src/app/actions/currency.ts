import { Action } from '@ngrx/store';
import { Currency } from './../models/currency';
export const CURRENCIESUPDATE = '[ Currency ] UpdateAll';
export const CURRENCIESUPDATED = '[ Currency ] UpdatedAll';

export class CurrencyUpdateAction implements Action {
    type = CURRENCIESUPDATE;
}
export class CurrencyUpdatedAction implements Action {
    type = CURRENCIESUPDATED;

    constructor(public payload: Currency[]) {}
}
