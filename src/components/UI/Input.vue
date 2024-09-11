<script setup>
const amount = defineModel();
</script>
<template>
  <input type="number" v-model="amount" />
</template>

<style lang="scss">
input {
  padding: 7px 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 200px;
  
}

input:focus {
  outline: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
