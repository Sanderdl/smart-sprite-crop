
const state = {
  includeSubfolders: true
}

const getters = {
  includeSubfolders: state => state.includeSubfolders
}

const actions = {
  toggleIncludeSubFolders({ commit }) {
    commit('toggleIncludeSubFolders')
  }
}

const mutations = {
  toggleIncludeSubFolders: (state) => {
    state.includeSubfolders = !state.includeSubfolders
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
