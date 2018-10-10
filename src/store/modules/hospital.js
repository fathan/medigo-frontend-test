import { ENV } from '@/config/environment'
import * as mutationType from '../mutationType'
import axios from 'axios'

const state = {
  hospitals: [],
  hospitalSearchResults: [],
  hospital: {}
}

const getters = {
  hospitals: state => { return state.hospitals },
  hospitalSearchResults: state => { return state.hospitalSearchResults },
  hospital: state => { return state.hospital }
}

const mutations = {
  [mutationType.HOSPITALS] (state, data) {
    state.hospitals = data
  },
  [mutationType.HOSPITAL_SEARCH_RESULT] (state, data) {
    state.hospitalSearchResults = data
  },
  [mutationType.HOSPITAL] (state, data) {
    state.hospital = data
  }
}

const actions = {
  _xhrHospitalList () {
    return new Promise((resolve, reject) => {
      const options = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const page = 1

      axios.get(`${ENV}/health-center?page=${page}`, options)
        .then(
          response => resolve(response)
        )
        .catch(
          error => reject(error)
        )
    })
  },
  _xhrHospitalSearch () {
    return new Promise((resolve, reject) => {
      const options = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const page = 1
      const keyword = 'Panti'

      axios.get(`${ENV}/health-center?search=${keyword}&page=${page}`, options)
        .then(
          response => resolve(response)
        )
        .catch(
          error => reject(error)
        )
    })
  },
  _xhrHospitalDetail () {
    return new Promise((resolve, reject) => {
      const options = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const id = 1
      axios.get(`${ENV}/health-center/${id}`, options)
        .then(
          response => resolve(response)
        )
        .catch(
          error => reject(error)
        )
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
