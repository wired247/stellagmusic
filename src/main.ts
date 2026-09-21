// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import Squarespace static CSS
import './assets/sqsp/universal/user-account-core-min.en-US.css'
import './assets/sqsp/definitions/website-component-definition/static-assets/socialLinks/website.components.socialLinks.styles.css'
import './assets/sqsp/definitions/website-component-definition/static-assets/imageFluid/website.components.imageFluid.styles.css'
import './assets/sqsp/definitions/website-component-definition/static-assets/code/website.components.code.styles.css'
import './assets/sqsp/definitions/website-component-definition/static-assets/html/website.components.html.styles.css'
import './assets/sqsp/versioned-site-css/site.css'
import './assets/sqsp/vta/versioned-assets/static_home.css'
import './assets/sqsp/custom-css/custom.css'

createApp(App).use(router).mount('#app')
