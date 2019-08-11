
const state = {
  steps: [
    {
      id: 1,
      icon: 'collections',
      action: 'Select sprites',
      complete: false
    },
    {
      id: 2,
      icon: 'settings',
      action: 'Configure options',
      complete: false
    },
    {
      id: 3,
      icon: 'crop',
      action: 'Crop sprites!',
      complete: false
    }
  ]
}

const getters = {
  steps: state => state.steps
}

const actions = {

  toggleCompleteStep({ commit }, id) {
    commit('toggleCompleteStep', id)
  }
}

const mutations = {
  toggleCompleteStep: (state, id) => {
    console.log('test')
    state.steps = state.steps.map(step => {
      if (step.id === id) {
        step.complete = !step.complete
      }
      return step
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
