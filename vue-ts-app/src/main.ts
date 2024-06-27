import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import Route from './router/index.ts'

createApp(App).use(Route).mount('#app')
