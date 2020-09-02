import {createStore, useStore as vuexUseStore} from 'vuex';
import {module as counterModule, MODULE_NAME as COUNTER_MODULE_NAME, State as CounterState} from './modules/counter';
import {Store} from './types';

export const store = createStore({
  modules: {
    [COUNTER_MODULE_NAME]: counterModule
  }
});

interface State {
  [COUNTER_MODULE_NAME]: CounterState
}

export const useStore = (): Store<State> => vuexUseStore<State>();
