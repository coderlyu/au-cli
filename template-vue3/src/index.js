import { createApp } from 'vue'
import App from './App.vue'

// style
import '@/assets/app.css'
import '@/assets/main.scss'

// plugins
import plugins from '@/plugins'


createApp(App)
.use(plugins)
.mount('#app')