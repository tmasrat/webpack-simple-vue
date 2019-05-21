import Vue from 'vue'
import Router from 'vue-router'
import test from './components/test.vue'
Vue.use(Router);

export function createRouter () {
    return new Router ({
        mode: 'history',
        routes: [
            {path: '/test', component: test}
        ]
    })

}
