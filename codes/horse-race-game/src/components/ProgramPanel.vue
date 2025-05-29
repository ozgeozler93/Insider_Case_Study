<!--ProgramPanel.vue-->

<template>
  <div class="program-panel">
    <h3 class="section-title">📋 Program</h3>
    <div v-for="(race, index) in races" :key="index" class="program-card">
      <h4>{{ index + 1 }}. Lap - {{ race.distance }}m</h4>
      <DataTable :value="race.participants" stripedRows responsiveLayout="scroll" class="p-datatable-sm">
        <Column header="Position" :body="(_, { rowIndex }) => rowIndex + 1" />
        <Column field="name" header="Name" />
      </DataTable>
    </div>
  </div>
</template>

<script setup>
import { useRaceStore } from '../stores/raceStore'
import { computed } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

const raceStore = useRaceStore()
const races = computed(() => raceStore.races)
</script>

<style scoped>
.program-panel {
  padding-right: 8px;
}
.section-title {
  margin-bottom: 16px;
  color: #2c3e50;
  font-weight: 600;
}
.program-card {
  margin-bottom: 24px;
  background: #fefefe;
  padding: 12px;
  border-radius: 6px;
  box-shadow: 0 0 4px rgba(0,0,0,0.08);
}
.card {
  background: white;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}
.control-button {
  width: 100%;
  font-weight: 600;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}


</style>
