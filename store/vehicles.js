import { getVehicles } from '@/request.js'

const state = () => {
  return {
    data: null,
    isLoading: false,
    error: null,
    currentVehicle: null,
    currentTab: 'specifications',
  }
}

export const mutationTypes = {
  getVehiclesStart: '[vehicles] getVehiclesStart',
  getVehiclesSuccess: '[vehicles] getVehiclesSuccess',
  getVehiclesFailure: '[vehicles] getVehiclesFailure',
  setCurrentVehicle: '[vehicles] setCurrentVehicle',
  setCurrentTab: '[vehicles] setCurrentTab',
}

const mutations = {
  [mutationTypes.getVehiclesStart](state) {
    state.isLoading = true
    state.data = null
  },
  [mutationTypes.getVehiclesSuccess](state, payload) {
    state.isLoading = false
    state.data = payload
  },
  [mutationTypes.getVehiclesFailure](state, payload) {
    state.isLoading = false
    state.error = payload
  },
  [mutationTypes.setCurrentVehicle](state, currentVehicleId) {
    const index = state.data.map((o) => o.id).indexOf(currentVehicleId)
    state.currentVehicle = state.data[index]
  },
  [mutationTypes.setCurrentTab](state, currentTab) {
    state.currentTab = currentTab
  },
}

const actions = {
  '[vehicles] getVehicles'(context) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getVehiclesStart)
      getVehicles()
        .then((response) => {
          context.commit(mutationTypes.getVehiclesSuccess, response)
          resolve(response)
        })
        .catch((error) => {
          context.commit(mutationTypes.getVehiclesFailure, error)
        })
    })
  },
  '[vehicles] setCurrentVehicles'(context, currentVehicleId) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getVehiclesStart)
      getVehicles()
        .then((response) => {
          context.commit(mutationTypes.getVehiclesSuccess, response)
          context.commit(mutationTypes.setCurrentVehicle, currentVehicleId)
          resolve(response)
        })
        .catch((error) => {
          context.commit(mutationTypes.getVehiclesFailure, error)
        })
    })
  },
}

export default {
  state,
  actions,
  mutations,
}
