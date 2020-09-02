import {State, DecreaseResult, DecreasePayload, INCREASE, IncreasePayload} from './types';
import {Commit} from '../../types';

interface DecreaseContext {
  commit: Commit;
  state: Pick<State, 'counter'>;
}
export const decrease = async ({commit, state}: DecreaseContext, {amount}: DecreasePayload): Promise<DecreaseResult> => {
  commit<IncreasePayload>(INCREASE, {amount: amount * -1});
  return state.counter;
};
