
export default [
  {
    path: '/',
    component: () => import('layouts/index'),
    children: [
      { path: '', component: () => import('pages/index') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/main'),
    children: [
      { path: '404', component: () => import('pages/404') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    redirect: '/404'
  }
]
