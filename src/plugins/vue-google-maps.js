import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCtkiMxt9tSY-aQ4Jvgr3IrXTQv4nbtR6Y',
    libraries: 'places'
  }
})
