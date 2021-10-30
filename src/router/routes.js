import Home from '../views/Home.vue'
import SearchMovie from '../views/SearchMovie.vue'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search-movie', 
    name: 'SearchMovie',
    component: SearchMovie
  },
]