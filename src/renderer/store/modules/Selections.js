
const state = {
  spriteCount: 0,
  folderCount: 1,
  selectedPath: '',
  fileList: []
}

const getters = {
  spriteCount: state => state.spriteCount,
  folderCount: state => state.folderCount,
  selectedPath: state => state.selectedPath,
  fileList: state => state.fileList
}

const actions = {
  setSpriteCount({ commit }, amount) {
    commit('setSpriteCount', amount)
  },
  setFolderCount({ commit }, amount) {
    commit('setFolderCount', amount)
  },
  setSelectedPath({ commit }, path) {
    commit('setSelectedPath', path)
  },
  setFileList({ commit }, list) {
    commit('setFileList', list)
  }
}

const mutations = {
  setSpriteCount: (state, amount) => {
    state.spriteCount = amount
  },
  setFolderCount: (state, amount) => {
    const count = amount <= 0 ? 1 : amount
    state.folderCount = count
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
