import Home from '../pages/home/index'
import Button from '../components/Button/index'
import Greetings from '../components/Greetings/index'
import UserList from '../components/Button/index'
import UserAdd from '../components/Button/index'
const routes = [
  {
    path: '/Home',
    component: Home,
    exact: true
  },
  {
    path: '/Button',
    component: Button,
    exact: false
  },
  {
    path: '/Greetings',
    component: Greetings,
    exact: false,
    children: [
      {
        path: '/user/',
        component: UserList
      },
      {
        path: '/user/add',
        component: UserAdd
      }
    ]
  }
]
export default routes
