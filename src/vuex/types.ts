import type {CommitOptions, DispatchOptions, Store as VuexStore} from 'vuex';

type NoInfer<T> = [T][T extends unknown ? 0 : never];

export interface Commit {
  <P = never>(type: string, payload: NoInfer<P>, options?: CommitOptions): void;
}
export interface Dispatch {
  <P = never, R = unknown>(type: string, payload: NoInfer<P>, options?: DispatchOptions): Promise<R>;
}

export type Store<S> = Omit<VuexStore<S>, 'commit'|'dispatch'> & {
  commit: Commit;
  dispatch: Dispatch;
};
