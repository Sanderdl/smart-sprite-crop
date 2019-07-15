
const state = {
  selectedAmount: 0,
  selectedPath: '',
  fileList: []
}

const getters = {
  selectedAmount: state => state.selectedAmount,
  selectedPath: state => state.selectedPath,
  fileList: state => state.fileList
}

const actions = {
  setSelectedAmount({ commit }, amount) {
    commit('setSelectedAmount', amount)
  },
  setSelectedPath({ commit }, path) {
    commit('setSelectedPath', path)
  },
  setFileList({ commit }, list) {
    commit('setFileList', list)
  }
}

const mutations = {
  setSelectedAmount: (state, amount) => {
    state.selectedAmount = amount
  },
  setSelectedPath: (state, path) => {
    state.selectedPath = path
  },
  setFileList: (state, list) => {
    state.fileList = list
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
