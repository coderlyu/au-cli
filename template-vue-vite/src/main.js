import { createApp } from 'vue'
import App from './App.vue'

// style
import './assets/app.css'

// plugins
import plugins from './plugins/index'

createApp(App)
.use(plugins)
.mount('#app')
