import { Home } from "../views/home"
import { welcome } from "../views/welcom"
import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  {
    path: '/',
    beforeEnter: (to, from) => {
      console.log('111')
			return true
		},
    component:Home
  },
  {
    path: '/welcome',
    component:welcome
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})