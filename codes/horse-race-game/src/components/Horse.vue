<!-- Horse.vue -->

<template>
  <div class="horse" :style="{ backgroundColor: color }">
    🐎 {{ name }} (Cond: {{ condition }})
  </div>
</template>

<script>
export default {
  name: "HorseCard",
  props: {
    name: String,
    color: String,
    condition: Number
  }
}
</script>

<style scoped>
.horse {
  padding: 10px;
  margin: 5px;
  color: white;
  font-weight: bold;
  border-radius: 5px;
}
</style>
