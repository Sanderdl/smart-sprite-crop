
const state = {
  includeSubfolders: true,
  constraints: {
    left: true,
    right: true,
    top: false,
    bottom: true
  },
  backgroundStrategy: 'auto',
  backgroundColor: '#ff0000',
  autoStrategy: 'top-left'
}

const getters = {
  includeSubfolders: state => state.includeSubfolders,
  constraints: state => state.constraints,
  backgroundStrategy: state => state.backgroundStrategy,
  backgroundColor: state => state.backgroundColor,
  autoStrategy: state => state.autoStrategy
}

const actions = {
  toggleIncludeSubFolders({ commit }) {
    commit('toggleIncludeSubFolders')
  },
  toggleConstraint({ commit }, constraint) {
    commit('toggleConstraint', constraint)
  },
  setbackgroundStrategy({commit}, strategy) {
    commit('setBackgroundStrategy', strategy)
  },
  setbackgroundColor({commit}, color) {
    commit('setBackgroundColor', color)
  },
  setAutoStrategy({commit}, strategy) {
    commit('setAutoStrategy', strategy)
  }
}

const mutations = {
  toggleIncludeSubFolders: (state) => {
    state.includeSubfolders = !state.includeSubfolders
  },
  toggleConstraint: (state, constraint) => {
    state.constraints[constraint] = !state.constraints[constraint]
  },
  setBackgroundStrategy: (state, strategy) => {
    state.backgroundStrategy = strategy
  },
  setBackgroundColor: (state, color) => {
    state.backgroundColor = color
  },
  setAutoStrategy: (state, strategy) => {
    state.autoStrategy = strategy
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
