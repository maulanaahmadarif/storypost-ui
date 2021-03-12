import Home from './views/Home'
import PhotoDetail from './views/Photos/Detail'
import Category from './views/Category/Category'
import CategoryDetail from './views/Category/CategoryDetail'
import Profile from './views/Profile/Profile'
import EditProfile from './views/Profile/EditProfile'
import NotFound from './views/NotFound'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    exact: true
  },
  {
    name: 'Profile',
    path: '/profile',
    component: Profile,
    exact: true
  },
  {
    name: 'EditProfile',
    path: '/profile/edit',
    component: EditProfile
  },
  {
    name: 'PhotoDetail',
    path: '/photo/:id',
    component: PhotoDetail
  },
  {
    name: 'Category',
    path: '/category',
    component: Category,
    exact: true
  },
  {
    name: 'Category',
    path: '/category/:name',
    component: CategoryDetail
  },
  {
    name: '404',
    path: '*',
    component: NotFound
  }
]

export default routes