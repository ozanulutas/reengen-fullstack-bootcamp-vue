import store from "@/store"
import Home from '../views/Home.vue'
import SearchMovie from '../views/SearchMovie.vue'
import MovieDetails from '../views/MovieDetails.vue'
import ActorDetails from '../views/ActorDetails.vue'
import Chart from '../views/Chart.vue'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search-movie', 
    name: 'SearchMovie',
    component: SearchMovie,
  },
  {
    path: "/movie-detail/:id", 
    name: "movie-detail",
    component: MovieDetails,
  },
  {
    path: "/actor/name/:id", 
    name: "actor-detail",
    component: ActorDetails,
    beforeEnter: (to, from, next) => { // nereden, nereye, izin veiyor muyum
      store.commit("SET_ACTOR_DETAIL", {type: "del"})
      next()
    }
  },
  {
    path: "/chart", 
    name: "chart",
    component: Chart,
  },
]