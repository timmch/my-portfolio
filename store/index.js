export const state = () => ({
  projects: [],
  tags: []
})

export const mutations = {
  setProjects(state, list) {
    state.projects = list
  },
  setTags(state, list) {
    state.tags = list
  }
}

export const actions = {
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
