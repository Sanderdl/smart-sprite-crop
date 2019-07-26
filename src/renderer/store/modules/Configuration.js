
const state = {
  includeSubfolders: true,
  constraints: {
    left: true,
    right: true,
    top: false,
    bottom: true
  }
}

const getters = {
  includeSubfolders: state => state.includeSubfolders,
  constraints: state => state.constraints
}

const actions = {
  toggleIncludeSubFolders({ commit }) {
    commit('toggleIncludeSubFolders')
  },
  toggleConstraint({ commit }, constraint) {
    commit('toggleConstraint', constraint)
  }
}

const mutations = {
  toggleIncludeSubFolders: (state) => {
    state.includeSubfolders = !state.includeSubfolders
  },
  toggleConstraint: (state, constraint) => {
    state.constraints[constraint] = !state.constraints[constraint]
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
