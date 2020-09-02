<template>
  <input type="text" ref="input" :value="value" @input="setValue"/>
</template>

<script lang="ts">
  import {ref} from 'vue';
  import apiComposable from './apiComposable';
  import {defineComponent} from 'vue';
  export default defineComponent({
    setup() {
      const input = ref<HTMLInputElement|null>(null);
      const {setValue, value} = apiComposable();
      return {
        value,
        input,
        setValue: () => {
          setValue(input.value?.value ?? '');
        }
      };
    }
  });
</script>