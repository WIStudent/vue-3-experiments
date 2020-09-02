<template>
  <div>
    Counter: {{ counter }}
  </div>
  <div>
    Double: {{ double }}
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, onBeforeUnmount} from 'vue';
import computeDouble from './computeDouble';
export default defineComponent({
  setup () {
    const counter = ref(0);
    const double = computeDouble(counter);

    const timer = setInterval(() => {
      counter.value += 1;
    }, 1000);

    onBeforeUnmount(() => {
      clearInterval(timer);
    });

    return {counter, double};
  }
});
</script>