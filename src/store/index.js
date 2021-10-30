import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: "patika",
    number: 0,
    favMovies: [],
    searchResults: [],
    apiUrl: 'https://imdb8.p.rapidapi.com/',
    headers: {
      'x-rapidapi-host': 'imdb8.p.rapidapi.com',
      'x-rapidapi-key': '26ed98b555mshbfdb548787d1f8dp1f984bjsnadff1432eb7f'
    }
  },
  mutations: {
    SET_NUMBER(state, payload) {
      state.number = payload;
    },
    SET_MOVIE_SEARCH_RESULT(state, payload) {
      state.searchResults = payload;
    },
    SET_FAV_MOVIES(state, payload) {
      switch (payload.type) {
        case "add": {
          let i = state.searchResults.findIndex(mov => mov.id === payload.movie.id)
          state.searchResults[i] = { ...state.searchResults[i], fav: true }
          state.favMovies.push(payload.movie)
        }
          break;
        default: {
          let i = state.searchResults.findIndex(mov => mov.id === payload.movie.id)
          state.searchResults[i] = { ...state.searchResults[i], fav: false }
          state.favMovies.splice(i, 1)
        } break;
      }
    }
  },
  actions: {
    getNumber({ commit }, payload) { // mutation commit, action dispatch ile çağırılır
      let number = 0
      for (let i = 0; i < payload; i++) {
        number += i;
      }
      commit("SET_NUMBER", number)
    },
    searchMovieTitle({ state, commit }, payload) {
      return axios.get(`${state.apiUrl}/title/find`, {
        headers: { ...state.headers },
        params: { q: payload }
      })
        .then(res => {
          console.log(res.data.results);
          const data = res.data.results.filter(result => result.image !== undefined)
          commit("SET_MOVIE_SEARCH_RESULT", data)
        })
        .catch(err => console.log(err))
    }
  },
  getters: {
    searchTypeMovie: (state) => {
      let res = 0;
      for (let i = 0; i < state.searchResults.length; i++) {
        if (state.searchResults[i].titleType === "movie") res++;
      }
      return res;
    },
    favNumber: (state) => {
      return state.favMovies.length
    }
  },
  modules: {
  }
})