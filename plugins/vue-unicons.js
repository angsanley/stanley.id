import Vue from 'vue'
import Unicon from 'vue-unicons/dist/vue-unicons-ssr.common.js'
import { uniBars, uniLinkedin, uniInstagram, uniTwitter, uniGithub } from 'vue-unicons/src/icons'
Unicon.add([uniBars, uniInstagram, uniTwitter, uniLinkedin, uniGithub])
Vue.use(Unicon)