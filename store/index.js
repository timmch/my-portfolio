export const state = () => ({
  projects: [],
  tags: [],
  selectedTags: [],
  initialLoadTime: null
})

export const mutations = {
  setInitialLoadTime(state) {
    state.initialLoadTime = new Date()
  },
  setProjects(state, list) {
    state.projects = list
  },
  setTags(state, list) {
    state.tags = list
  },
  addSelectedTag(state, slug) {
    if (!state.selectedTags.includes(slug)) {
      state.selectedTags.push(slug)
    }
  },
  clearSelectedTags(state) {
    state.selectedTags = []
  }
}

export const actions = {
  setInitialLoadTimeIfNull({ commit, state }) {
    // console.log('here', state.initialLoadTime)
    if (!state.initialLoadTime) {
      commit('setInitialLoadTime')
    }
  },
  async nuxtServerInit({ commit }) {
    // Get project files
    const projectFiles = await require.context(
      '~/assets/content/project/',
      false,
      /\.json$/
    )
    const projects = projectFiles.keys().map((key) => {
      const res = projectFiles(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setProjects', projects)

    const tagFiles = await require.context(
      '~/assets/content/tag/',
      false,
      /\.json$/
    )

    const tags = tagFiles.keys().map((key) => {
      const res = tagFiles(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setTags', tags)
  }
}
