// ✅ src/components/RaceResult.vue
<template>
  <div class="results">
    <div v-if="!showMini">
      <h2 class="header">🏆 Race Results</h2>
      <!-- Normal sonuç tabloları -->
      <div v-for="(result, index) in raceStore.results" :key="index" class="result-section card">
        <h3>{{ index + 1 }}. Lap - {{ result.distance }}m</h3>
        <DataTable :value="result.sortedParticipants" responsiveLayout="scroll" stripedRows class="p-datatable-sm">
        <Column header="Position">
            <template #body="slotProps">
            {{ slotProps.index + 1 }}
            </template>
        </Column>
        <Column field="name" header="Name" />
        </DataTable>

      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ showMini: Boolean }) // ekledik
import { useRaceStore } from '../stores/raceStore'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { computed } from 'vue'

const raceStore = useRaceStore()

const winCountArray = computed(() => {
  return Object.entries(raceStore.winCounts).map(([name, wins]) => ({ name, wins }))
})
</script>

<style scoped>
.results {
  margin-top: 30px;
  padding: 0 16px;
}
.card {
  background: white;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}

.header {
  margin-bottom: 24px;
  text-align: center;
  color: #2c3e50;
}

.result-section {
  margin-bottom: 32px;
  padding: 20px;
  background: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.win-header {
  margin-top: 40px;
  margin-bottom: 16px;
  color: #34495e;
  font-weight: 600;
}

.p-datatable-sm {
  font-size: 0.9rem;
  background-color: #ffffff;
  border-radius: 6px;
}

.p-datatable-sm ::v-deep thead {
  background-color: #e0e0e0;
  font-weight: bold;
}
</style>