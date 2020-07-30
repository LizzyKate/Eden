export const state = () => ({
  Post: [],
  postClone: [],
})

export const mutations = {
  getData(state, payload) {
    state.Post = payload
    state.postClone = payload
  },
  duplicateClone(state, payload) {
    if (payload === '') {
      state.Post = state.postClone
    } else {
      const x = state.postClone.filter((e) => e.data.title.includes(payload))
      state.Post = x
    }
  },
  moreVotes(state) {
    state.Post.sort((a, b) => {
      return +b.data.ups - +a.data.ups
    })
  },
  lessVotes(state) {
    state.Post.sort((a, b) => +a.data.ups - +b.data.ups)
  },
  mostRecentPosts(state) {
    state.Post.sort((a, b) => +b.data.created - +a.data.created)
  },
  leastRecentPosts(state) {
    state.Post.sort((a, b) => +a.data.created - +b.data.created)
  },
}

export const actions = {
  async getIncidents({ commit }) {
    const res = await this.$axios.$get('')
    commit('getData', res.data.children)
  },
}
