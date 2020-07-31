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
      state.Post = state.postClone.filter((e) =>
        e.data.title.toLowerCase().includes(payload.toLowerCase())
      )
    }
  },
  filterPost(state, payload) {
    state.Post = state.postClone.filter((e) => {
      if (payload.from > 0 || payload.to > 0) {
        if (+e.data.ups > +payload.from && +e.data.ups < payload.to) {
          return e
        }
      } else return e
    })
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
    const res = await this.$axios.$get('.json')
    commit('getData', res.data.children)
  },
  async getSubrreddits({ commit }, payload) {
    const res = await this.$axios.$get('/r/' + payload + '.json')
    commit('getData', res.data.children)
  },
}
