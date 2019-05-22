import Vue from 'vue'
import Router from 'vue-router'
import CHAT_GUEST_INVITE from './components/CHAT_GUEST_INVITE.vue'
import Home from './components/Home.vue'
Vue.use(Router);

export function createRouter () {
    // console.log(data);
    // console.log('In here');
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
                name: 'CHAT_GUEST_INVITE',
                path: '/CHAT_GUEST_INVITE',
                component: CHAT_GUEST_INVITE,
                props: true
            }
        ]
    })
}
