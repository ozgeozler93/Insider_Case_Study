// ✅ main.js
import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'
const pinia = createPinia()

import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Button from 'primevue/button'

const app = createApp(App)
app.use(pinia)  // <- En önce
app.use(PrimeVue)

app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('Button', Button)

app.mount('#app')
