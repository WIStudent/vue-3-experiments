import { Module } from "vuex";
import {State, INCREASE, DECREASE} from './types';
import { increase } from './mutations';
import {decrease} from './actions';

export {MODULE_NAME, INCREASE, DECREASE} from './types';
export type {IncreasePayload, DecreasePayload, DecreaseResult, State} from './types';


export const module: Module<State, any> = {
  namespaced: true,
  state: () => ({counter: 0}),
  mutations: {
    [INCREASE]: increase
  },
  actions: {
    [DECREASE]: decrease
  }
};

