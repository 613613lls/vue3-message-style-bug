import {createRouter,createWebHashHistory} from 'vue-router'
import Route from './route/index'

const createHashRouter  = ()=> createRouter({
    history: createWebHashHistory(),
    routes:Route
})
let router = createHashRouter()

export default router;