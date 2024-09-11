<script setup>
import { ref, onMounted, computed } from "vue";
import exchangeRates from "../api/exchangeRates";

import Input from "../components/UI/Input.vue";
import Label from "../components/UI/Label.vue";
import Select from "../components/UI/select.vue";

const amount = ref(1);
const fromCurrency = ref("");
const toCurrency = ref("");
const currencies = ref({});

const fetchCurrencies = async () => {
  try {
    const { data } = await exchangeRates.getExchangeRates();
    currencies.value = data;
  } catch (error) {
    console.error("Failed to fetch currency data");
  }
};

const convertCurrency = computed(() => {
  return amount.value * currencies.value[fromCurrency.value];
});

const getCurrencyByLocale = () => {
  const country = navigator.language.slice(0, 2).toLowerCase();
  let baseCurrency = "usd-rub";
  console.log(country);

  for (const pair of Object.keys(currencies.value)) {
    console.log(pair);

    if (pair.startsWith(country)) {
      baseCurrency = pair;
      return baseCurrency;
    }
  }
};

onMounted(async () => {
  await fetchCurrencies();
  fromCurrency.value = getCurrencyByLocale();
});
</script>
<template>
  <div class="converter">
    <h1 class="converter__title">Currency Converter</h1>

    <div class="converter__input">
      <Label><template #title>Amount:</template></Label>
      <Input v-model="amount" />
    </div>

    <div class="converter__currency-selection">
      <Label for="fromCurrency"><template #title>From:</template></Label>
      <Select
        v-model="fromCurrency"
        :currencies="currencies"
        :getCurrencyByLocale="getCurrencyByLocale"
      />
    </div>

    <div class="converter__result">
      <h2 class="converter__result-title">Converted Amount:</h2>
      <p class="converter__result-text" v-if="convertCurrency">
        {{ convertCurrency.toFixed(2) }} {{ toCurrency.slice(0, 3) }}
      </p>
      <p class="converter__result-text" v-else>0</p>
    </div>
  </div>
</template>

<style lang="scss">
.converter {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    font-size: 40px;
    margin-bottom: 20px;
  }

  &__input,
  &__currency-selection,
  &__result {
    display: flex;
    gap: 0 7px;
    margin-bottom: 10px;
    align-items: center;
  }
}
</style>
