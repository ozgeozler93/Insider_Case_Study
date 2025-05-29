// ✅ src/stores/raceStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRaceStore = defineStore('race', () => {
  const horses = ref([])
  const races = ref([])
  const results = ref([])
  const winCounts = ref({})
  const RACE_DISTANCES = [1200, 1400, 1600, 1800, 2000, 2200]

function resetWinCounts() {
  this.winCounts = {}
}


function generateHorses() {
  this.horses = []
  const names = [
    'Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton', 'Joan Clarke',
    'Katherine Johnson', 'Hedy Lamarr', 'Mary Jackson', 'Dorothy Vaughan',
    'Sister Mary Keller', 'Radia Perlman'
  ]
  for (let i = 0; i < names.length; i++) {
    const id = i + 1
    const name = names[i]
    if (!name) continue  // güvenlik

    const condition = Math.floor(Math.random() * 100)
    const color = `hsl(${Math.random() * 360}, 80%, 60%)`
    this.horses.push({ id, name, condition, color })

    if (!(name in this.winCounts)) this.winCounts[name] = 0
  }
}

  function generateRaces() {
    races.value = []
    for (let i = 0; i < RACE_DISTANCES.length; i++) {
      const participants = [...horses.value].sort(() => 0.5 - Math.random())
      races.value.push({ participants, distance: RACE_DISTANCES[i] })
    }
  }

  function clearResults() {
    results.value = []
  }

  function resetWinCounts() {
  for (const key in this.winCounts) {
    this.winCounts[key] = 0
  }
}


  function addResult(result) {
  const race = this.races[result.raceNumber - 1]
  if (!race || !race.participants || race.participants.length === 0) return

  const sorted = [...race.participants].sort((a, b) => b.condition - a.condition)
  const winner = sorted[0]

  // Ek kontrol: winner.name yoksa işlemi iptal et
  if (!winner || typeof winner.name !== 'string') {
    console.warn('⚠️ Winner name undefined:', winner)
    return
  }

  const winnerName = winner.name.trim()

  this.results.push({
    ...result,
    sortedParticipants: sorted
  })

  this.winCounts[winnerName] = (this.winCounts[winnerName] || 0) + 1
}



  return {
    horses, races, results, winCounts,
    generateHorses, generateRaces, clearResults, addResult, resetWinCounts
  }
})
