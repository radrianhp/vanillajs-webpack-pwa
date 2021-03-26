
import Home from '../views/pages/home'
import Favorites from '../views/pages/favorites'
import Detail from '../views/pages/detail'
import AboutUs from '../views/pages/about-us'

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/favorites': Favorites,
  '/about-us': AboutUs,
  '/detail/:id': Detail
}

export default routes
