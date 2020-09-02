<template>
  <counter/>
  <api-component/>
  <vuex-counter/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Counter from './components/Counter/Counter.vue';
import ApiComponent from './components/Api/ApiComponent.vue';
import VuexCounter from './components/VuexCounter/VuexCounter.vue';

export default defineComponent({
  name: 'App',
  components: {
    Counter,
    ApiComponent,
    VuexCounter
  }
});
</script>
