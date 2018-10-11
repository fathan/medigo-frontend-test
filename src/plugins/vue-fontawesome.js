import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faArrowLeft,
  faSearch,
  faStar,
  faPhone,
  faClock,
  faHospital,
  faArrowRight,
  faImage,
  faMapMarker
} from '@fortawesome/free-solid-svg-icons'

library.add(faArrowLeft)
library.add(faSearch)
library.add(faStar)
library.add(faPhone)
library.add(faClock)
library.add(faMapMarker)
library.add(faHospital)
library.add(faImage)
library.add(faArrowRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)
