<!-- ✅ App.vue -->
<template>
  <GameView />
</template>

<script setup>
import GameView from './view/GameView.vue'
</script>


<style scoped>
.app-container {
  background: #f5f5f5;
  min-height: 100vh;
}
.app-header {
  background: #26a65b;
  padding: 12px 24px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main-layout {
  display: flex;
  padding: 20px;
  gap: 16px;
}
.left-panel,
.right-panel {
  width: 220px;
}
.center-panel {
  flex-grow: 1;
  background: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
}
.controls > * {
  margin-left: 12px;
}
.body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f7f9fc;
}

</style>
