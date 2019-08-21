import Vue from "vue"
import Router from "vue-router"
import { publicRoute, protectedRoute } from "./config"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
import store from "./../store";
const routes = publicRoute.concat(protectedRoute)

Vue.use(Router)
const router = new Router({
  mode: "history",
  linkActiveClass: "active",
  routes: routes
})
// router gards
router.beforeEach((to, from, next) => {
  NProgress.start()
  //auth route is authenticated
  store.dispatch("fetchAccessToken")

  if (to.fullPath !== "/auth/login") {
    if (!store.state.accessToken) {
      next("/auth/login")
    }
  }
  // if (to.fullPath === "/login") {
  //   if (store.state.accessToken) {
  //     next("/users")
  //   }
  // }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router
