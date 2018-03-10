import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from './store'
import pages from './pages'
import backdrops from './backdrops'

function backdrop (page) {
  for (let i = 0, l = backdrops.length; i < l; i += 1) {
    if (page.includes(backdrops[i].path)) { return backdrops[i].image }
  }
  return backdrops[backdrops.length - 1].image
}

// import pages from './pages'
// import backdrops from './backdrops'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => System.import(`@/${component}.vue`)
}

function loadPage (page) {
  return {
    path: page === 'index' ? '' : page,
    component: load(`page/${page}`),
    meta: {
      name: page.substr(page.lastIndexOf('/') + 1),
      backdrop: backdrop(page)
    }
  }
}

let routes = [
  {
    path: '/',
    component: load('Layout'),
    children: []
  }
]

pages.forEach(page => {
  routes[0].children.push(loadPage(page))
})

// Always leave this last one
routes.push({ path: '*', redirect: '/404' }) // Not found

const router = new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
        // , offset: { x: 0, y: 10 }
      }
    }
    else if (savedPosition) {
      return savedPosition
    }
    else {
      return { x: 0, y: 0 }
    }
  }

})

// router.beforeEach((to, from, next) => {
//   // window.scrollTo(0, 0)
//   if (to.meta) {
//     store.commit('meta', to.meta)
//   }
//   next()
// })

export default router
