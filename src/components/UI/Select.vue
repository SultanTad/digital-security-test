<script setup>
import Multiselect from "vue-multiselect";
const fromCurrency = defineModel();
defineProps({
  currencies: Object,
});

// const emit = defineEmits(["getCurrencyByLocale"]);
</script>

<template>
  <Multiselect
    v-model="fromCurrency"
    v-if="fromCurrency === getCurrencyByLocale"
    :options="fromCurrency"
    :searchable="false"
    :close-on-select="false"
    :show-labels="false"
  >
  </Multiselect>
  <Multiselect
    v-model="fromCurrency"
    v-else
    :options="Object.keys(currencies)"
    :searchable="false"
    :close-on-select="false"
    :show-labels="false"
  ></Multiselect>
</template>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style lang="scss"></style>
