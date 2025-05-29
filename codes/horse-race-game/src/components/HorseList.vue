<!-- src/components/HorseList.vue -->
<template>
  <div class="horse-list">
    <h3>Horse List</h3>
    <table class="styled-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Condition</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="horse in raceStore.horses" :key="horse.id">
          <td>{{ horse.name }}</td>
          <td>{{ horse.condition }}</td>
        </tr>
      </tbody>
    </table>

    <h3>🏅 Win Count</h3>
    <table class="styled-table">
      <thead>
        <tr>
          <th>Horse</th>
          <th>Wins</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(wins, name) in raceStore.winCounts" :key="name">
          <td>{{ name }}</td>
          <td>{{ wins }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useRaceStore } from '../stores/raceStore'
const raceStore = useRaceStore()
</script>

<style scoped>
.horse-list {
  font-size: 0.95rem;
}

.styled-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
}

.styled-table th,
.styled-table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

.styled-table th {
  background-color: #f0f0f0;
}
</style>
