import pages from './pages'
export default [
  {
    path: '/',
    component: () => import('layouts/main'),
    children: [
      { path: '', name: 'index', component: () => import('pages/index') },
      ...pages.map(page => ({ path: page, name: page, component: () => import(`pages/${page}`) })),
      { path: '*', name: '404', component: () => import('pages/404') }
    ]
  },
  { // Always leave this as last one
    path: '*',
    redirect: '/404'
  }
]
