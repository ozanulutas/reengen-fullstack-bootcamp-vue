import About from '../views/About.vue'
import Help from '../views/Help.vue'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about', // dynamic root matching, id gelmezse componenti göstermez
    // path: '/about/:id', // dynamic root matching, id gelmezse componenti göstermez
    name: 'About',
    component: About
  },
  {
    path: '/help',
    name: 'Help',
    component: Help,
    // props: {­asd: "asd"},
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
]