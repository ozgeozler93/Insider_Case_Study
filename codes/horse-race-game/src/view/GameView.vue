<!--GameView.vue -->
<template>
  <div class="layout">
    <header class="top-bar">
      <h1>🐎 Horse Racing</h1>
      <div class="button-group">
        <Button label="Generate Program" icon="pi pi-refresh" @click="generate" />
        <Button label="Start All Races" icon="pi pi-flag" @click="startAllRaces" :disabled="races.length === 0" />
      </div>
    </header>

    <div class="main-layout">
    <aside class="left-panel">
      <HorseList />
      <RaceResult :showMini="true" class="mini-result" /><!-- sadece Win Count gösterecek -->
      <Button label="Generate Program" class="control-button" @click="generate" />
      <Button label="Start All Races" icon="pi pi-flag" class="control-button" :disabled="races.length === 0" @click="startAllRaces" />
    </aside>


      <main class="center-panel">
        <RaceTrack ref="raceTrack" />
      </main>

      <aside class="right-panel">
        <div class="program-section">
          <ProgramPanel />
        </div>
        <div class="result-section">
          <RaceResult />
        </div>
      </aside>

    </div>
  </div>
</template>


<script setup>
import { useRaceStore } from '../stores/raceStore'
import { ref, computed } from 'vue'
import HorseList from '../components/HorseList.vue'
import RaceTrack from '../components/RaceTrack.vue'
import RaceResult from '../components/RaceResult.vue'
import ProgramPanel from '../components/ProgramPanel.vue'
import Button from 'primevue/button'

const raceStore = useRaceStore()
const raceTrack = ref(null)
const races = computed(() => raceStore.races)

let isPaused = ref(false)
let currentRaceIndex = ref(0)
let raceInterval = null

function generate() {
  raceStore.clearResults()
  raceStore.resetWinCounts?.()
  raceStore.generateHorses()
  raceStore.generateRaces()
  currentRaceIndex.value = 0
  isPaused.value = false
  clearInterval(raceInterval)
}

function startAllRaces() {
  if (!races.value.length || isPaused.value) return

  raceInterval = setInterval(() => {
    if (isPaused.value || currentRaceIndex.value >= races.value.length) {
      clearInterval(raceInterval)
      return
    }

    raceTrack.value?.startRaceAnimation(currentRaceIndex.value)
    currentRaceIndex.value++
  }, 2000)
}

function togglePause() {
  isPaused.value = !isPaused.value
  if (!isPaused.value) {
    startAllRaces()
  } else {
    clearInterval(raceInterval)
  }
}
</script>



<style scoped>
.layout {
  display: flex;
  flex-direction: column;
}

.main-layout {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px;
}

/* ÜST BAR */
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #2ecc71;
  padding: 12px 20px;
  color: white;
  font-weight: bold;
}

.button-group {
  display: flex;
  gap: 10px;
}

/* SOL PANEL */
.left-panel {
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* ORTA PANEL */
.center-panel {
  flex-grow: 1;
  background: #f5f5f5;
  padding: 16px;
  border-radius: 12px;
}

/* SAĞ PANEL */
.right-panel {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

/* Sol kısmı (program) */
.program-section {
  width: 50%;
  min-width: 150px;
}

/* Sağ kısmı (sonuçlar) */
.result-section {
  width: 50%;
  min-width: 150px;
}


</style>
