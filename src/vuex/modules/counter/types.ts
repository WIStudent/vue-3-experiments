export interface State {
  counter: number;
}

export const MODULE_NAME = 'COUNTER';

// INCREASE mutation
export const INCREASE = 'INCREASE';
export interface IncreasePayload {
  amount: number
}

// DECREASE action
export const DECREASE = 'DECREASE';
export interface DecreasePayload {
  amount: number;
}
export type DecreaseResult = number;
