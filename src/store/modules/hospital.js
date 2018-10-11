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
  /**
   * @method : GET
   * @description : Get All Hospital List
   */
  _xhrHospitalList ({ commit }) {
    return new Promise((resolve) => {
      const options = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const page = 1

      axios.get(`${ENV.API_URL}/health-center?page=${page}`, options)
        .then(
          response => {
            resolve(response)
            commit(mutationType.HOSPITALS, response.data)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    })
  },
  /**
   * @method : GET
   * @description : Get All Hospital List By Keyword Searching
   */
  _xhrHospitalSearch ({ commit }, data) {
    return new Promise((resolve) => {
      const options = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const page = 1
      const keyword = data

      axios.get(`${ENV.API_URL}/health-center?search=${keyword}&page=${page}`, options)
        .then(
          response => {
            resolve(response)
            commit(mutationType.HOSPITAL_SEARCH_RESULT, response.data)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    })
  },
  /**
   * @method : GET
   * @description : Get Detail Hospital Order By ID
   */
  _xhrHospitalDetail ({ commit }, data) {
    return new Promise((resolve) => {
      const options = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const id = data
      axios.get(`${ENV.API_URL}/health-center/${id}`, options)
        .then(
          response => {
            resolve(response)
            commit(mutationType.HOSPITAL, response.data)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
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
