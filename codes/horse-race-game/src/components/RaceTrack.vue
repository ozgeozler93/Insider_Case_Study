
<!-- src/components/RaceTrack.vue -->✅ 
<template>
  <div class="race-track">
    <div class="lap-info">🏁 {{ currentLap }}. Lap - {{ currentDistance }}m</div>

    <div
      v-for="(horse, index) in currentRace"
      :key="horse.id"
      class="lane"
    >
      <div class="lane-number">{{ index + 1 }}</div>
      <div
        class="horse-runner"
        :class="{ glow: horse.id === winnerId }"
        :style="getHorseStyle(index)"
      >
        🐎 {{ horse.name }}
      </div>
    </div>

    <div class="finish-line">🏁 FINISH</div>
  </div>
</template>

<script setup>
import { useRaceStore } from '../stores/raceStore'
import { ref } from 'vue'

const raceStore = useRaceStore()
const currentRace = ref([])
const currentDistance = ref(0)
const currentLap = ref(0)
const winnerId = ref(null)

function startRaceAnimation(raceIndex) {
  const race = raceStore.races[raceIndex]
  if (!race) return

  winnerId.value = null
  currentDistance.value = race.distance
  currentLap.value = raceIndex + 1

  currentRace.value = race.participants.map(h => ({
    ...h,
    offset: Math.random() * 80 + 10
  }))

  setTimeout(() => {
    const winner = race.participants.reduce((a, b) =>
      a.condition > b.condition ? a : b
    )
    winnerId.value = winner.id

    raceStore.addResult?.({
      raceNumber: raceIndex + 1,
      distance: race.distance,
      winner: winner.name || "Unknown",
      condition: winner.condition
    })
  }, 1000)
}

function getHorseStyle(index) {
  const offset = currentRace.value[index]?.offset || 0
  return {
    transform: `translateX(${offset}%)`,
    backgroundColor: currentRace.value[index]?.color || '#999'
  }
}

defineExpose({ startRaceAnimation })
</script>

<style scoped>
.race-track {
  background-color: #f5f5f5;
  border: 2px solid #ccc;
  padding: 40px 20px 20px 20px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
  position: relative;
}

/* Lap info (üstte, ortada) */
.lap-info {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 18px;
  font-weight: bold;
  background: #34495e;
  color: white;
  padding: 6px 14px;
  border-radius: 8px;
  z-index: 10;
}

.lane {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  position: relative;
}

.lane-number {
  width: 24px;
  font-weight: bold;
  margin-right: 6px;
  color: #666;
}

.horse-runner {
  height: 32px;
  position: relative;
  z-index: 1;
  line-height: 32px;
  padding: 0 12px;
  border-radius: 8px;
  font-weight: bold;
  color: white;
  background-color: #888;
  transition: transform 1s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.glow {
  box-shadow: 0 0 12px 3px gold;
  border: 2px solid gold;
  transform: scale(1.05) translateX(100%) !important;
}

.finish-line {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 4px;
  background-color: red;
  border-left: 4px dashed #000;
  z-index: 1;
}
</style>

