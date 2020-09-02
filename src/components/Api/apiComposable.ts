import {readonly, ref, onBeforeUnmount} from 'vue';
import {getValue, subscribe, unsubscribe, setValue} from './fakeApi';

export default () => {
  const internalVal = ref(getValue());

  subscribe(v => {
    internalVal.value = v;
  });

  onBeforeUnmount(() => {
    unsubscribe();
  });

  return {
    value: readonly(internalVal),
    setValue
  };
};