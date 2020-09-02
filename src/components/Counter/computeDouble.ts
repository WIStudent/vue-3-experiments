import {Ref, computed} from 'vue';

export default (ref: Ref) => {
  return computed(() => ref.value*2);
};