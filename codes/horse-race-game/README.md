# 🐎 Horse Race Game – Insider Case Study

This is a Vue 3-based project built as part of the **Insider Frontend Internship Task**. It simulates a multi-round horse race where horses with different conditions compete, and results are dynamically visualized.

---

## 🚀 Features

- 🎲 Generate 10 unique horses with random condition and color
- 🏁 Run **6 races** (1200m to 2200m)
- 🧠 Global state is handled with **Pinia**
- 🎥 Animated race visuals with real-time winner highlighting
- 📊 Live-updated race results and win leaderboard

---

## 🧰 Technologies Used

- **Vue 3** (Composition API)
- **Pinia** (State management)
- **Vue CLI** (Project setup)

---

## 📁 Folder Structure

```bash
src/
├── components/
│   ├── HorseList.vue      # List horses and their condition
│   ├── RaceResult.vue     # Shows result tables & win count
│   └── RaceTrack.vue      # Animates horses across the screen
├── stores/
│   └── raceStore.js       # Central logic: race generation & tracking
├── view/
│   └── GameView.vue       # Main interface, binds everything
└── main.js
```

---

## ▶️ How to Run Locally

```bash
# Navigate into the project folder
cd horse-race-game

# Install dependencies (with compatibility mode)
npm install --legacy-peer-deps

# Start development server
npm run serve
```

Then open your browser and go to:  
**http://localhost:8080**

---

## 🕹️ How to Use

1. Click **"Generate Horses & Races"** to start fresh.
2. Then hit **"Start All Races"** to animate 6 rounds.
3. Watch horses race, check results & who’s winning!

---

## ✅ Matches Case Study Requirements

- ✔️ Uses Vue 3 (modern setup)
- ✔️ Built via Vue CLI
- ✔️ Uses Pinia for state management
- ✔️ Race distances: 1200m–2200m
- ✔️ Animations and conditional visual logic implemented

---

## 🤔 What’s State Management?

In this project, **state management** refers to how horse and race data is stored and shared between components.
We use a **Pinia store** (`raceStore.js`) to:

- Generate and keep horse data
- Manage race list (participants, distance)
- Store race results and calculate winners

All updates automatically reflect across the app thanks to Vue’s reactivity.

---

## 🖼️ Visual Preview

> You can attach a screenshot here later (e.g. `/screenshots/race-results.png`).

---

## 👩‍💻 Author

Makbule Özge Özler  
This project was built as part of the **Insider Frontend Internship Case Study**.  
All logic, styling, and interaction were implemented with Vue 3 + Pinia.

---

## ✨ Final Notes

This app was designed to show:
- Core understanding of component-based UI development
- Centralized state logic
- Dynamic DOM manipulation + transitions

Let the race begin! 🐴💨
