<template>
  <div>
    Vuex Counter: {{ counter }}
  </div>
  <button @click="increase">Increase by 1</button>
  <button @click="decrease">Decrease by 2</button>
</template>

<script lang="ts">
  import {defineComponent, computed} from 'vue';
  import {useStore} from '../../vuex';
  import {MODULE_NAME, INCREASE, DECREASE, IncreasePayload, DecreasePayload} from '../../vuex/modules/counter';

  export default defineComponent({
    setup() {
      const store = useStore();
      const increase = () => store.commit<IncreasePayload>(`${MODULE_NAME}/${INCREASE}`, {amount: 1});
      const decrease = () => store.dispatch<DecreasePayload>(`${MODULE_NAME}/${DECREASE}`, {amount: 2});
      const counter = computed(() => store.state.COUNTER.counter);

      return {
        increase,
        decrease,
        counter
      };
    }
  });
</script>