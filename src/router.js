import Vue from 'vue'
import Router from 'vue-router'
import test from './components/test.vue'
import Home from './components/Home.vue'
Vue.use(Router);

export function createRouter (data) {
    console.log(data);
    console.log('In here');
    return new Router ({
        mode: 'history',
        routes: [
            {
                name: 'Home',
                path: '/',
                component: Home,
                props: true
            },
            {
                path: '/test',
                component: test,
                props: true
            }
        ]
    })
}
