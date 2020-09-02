import { IncreasePayload } from './types';

import {State} from './types';

export const increase = (state: Pick<State, 'counter'>, {amount}: IncreasePayload): void => {
  state.counter += amount;
};
