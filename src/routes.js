import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Novel from './views/Novel.vue'
import Chapter from './views/Chapter.vue'
import NovelsList from './views/NovelsList.vue'
import GenreNovelsList from './views/GenreNovelsList.vue'
import SearchNovelsList from './views/SearchNovelsList.vue'
import {createRouter,createWebHistory} from 'vue-router'

function capitalizeFirstLetter(str) {
    if (typeof str !== 'string' || str.length === 0) {
      return str;
    }
  
    return str.charAt(0).toUpperCase() + str.slice(1);
}
  
const routes = [
    {
        path:'/',
        name:'home',
        component:Home, 
        exact: true,
        meta: { title: 'TransNovel' },
        meta: {
            getTitle: () => {
              return 'TransNovel' 
            }
        }
        
    },
    {
        path:'/about',
        name:'about',
        component:About, 
        exact: true,
        meta: { title: 'TransNovel' }

    },
    {
        path:'/contact',
        name:'contact',
        component:Contact, 
        exact: true,
        meta: { title: 'TransNovel' }

    },
    {
        path:'/login',
        name:'login',
        component:Login,
        exact: true,
        meta: { title: 'TransNovel' },
        meta: {
            getTitle: (route) => {
              const title = `Login - TransNovel`;
              return title ;
            }
        }
    },
    {
        path:'/register',
        name:'register',
        component:Register,
        exact: true,
        meta: {
            getTitle: (route) => {
              const title = `Register - TransNovel`;
              return title ;
            }
        }
    },
    {
        path:'/novels/:name',
        name:'novel',
        component:Novel,
        meta: { title: 'TransNovel' },
        meta: {
            getTitle: (route) => {
              const { name } = route.params;
              const title = `${name} - TransNovel`;
              return capitalizeFirstLetter(title) ;
            }
        }
        
    },
    {
        path:'/novels/:name/:chapter',
        name:'chapter',
        component:Chapter,
        exact: true,
        meta: {
            getTitle: (route) => {
              const { name , chapter} = route.params;
              const title = `${name} - ${chapter} - TransNovel`;
              return capitalizeFirstLetter(title) ;
            }
        }
    },
    {
        path:'/genres/:genre_name/:number_page?',
        name:'genreNovelsList',
        component:GenreNovelsList,
        exact: true,
        meta: {
            getTitle: (route) => {
              const { genre_name } = route.params;
              const title = `${genre_name} Novels - TransNovel`;
              return capitalizeFirstLetter(title) ;
            }
        }
    },
    {
        path:'/novel-list/:list_name/:number_page?',
        name:'novelsList',
        component:NovelsList,
        exact: true,
        meta: {
            getTitle: (route) => {
              const { list_name } = route.params;
              const title = `${list_name} Novels - TransNovel`;
              return capitalizeFirstLetter(title) ;
            }
        }
    },
    {
        path:'/search',
        name:'searchNovelsList',
        component:SearchNovelsList,
        exact: true,
        meta: { title: 'Search' }
    }
]


const router = createRouter({ 
    history: createWebHistory(),
    routes,
}) ;

export default router;