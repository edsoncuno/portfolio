import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'

//inicio iconos
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// iconos que se van a usar
import { faLinux, faReact } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faAngular } from '@fortawesome/free-brands-svg-icons'
import { faVuejs } from '@fortawesome/free-brands-svg-icons'
import { faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faGitAlt } from '@fortawesome/free-brands-svg-icons'
import { faSass } from '@fortawesome/free-brands-svg-icons'
library.add(faNodeJs, faGitAlt, faReact, faGithub, faCss3Alt, faHtml5, faAngular, faVuejs, faSass, faLinux);
//fin iconos

const app = createApp(App)

app.use(router)
// inicio iconos iconos
app.component('font-awesome-icon', FontAwesomeIcon);
//fin iconos
app.mount('#app')
