<template>
  <div>
    Hello World!
    <p>
      <router-link to="/">Go To Home</router-link>
      <router-link to="/test">Go To About</router-link>
      <!--{{ post.title }}-->
    </p>
    <router-view></router-view>
    <!--<div>{{ msg }}</div>-->
  </div>
</template>

<!--<script>-->
<!--const TestVue = () => import(/* webpackChunkName: "below-fold" */ './components/test.vue'); // eslint-disable-line-->
<!--export default {-->
    <!--data () {-->
        <!--return {-->
            <!--loading: false,-->
            <!--post: null,-->
            <!--error: null-->
        <!--}-->
    <!--},-->
    <!--created () {-->
        <!--// fetch the data when the view is created and the data is-->
        <!--// already being observed-->
        <!--this.fetchData()-->
    <!--},-->
    <!--watch: {-->
        <!--// call again the method if the route changes-->
        <!--'$route': 'fetchData'-->
    <!--},-->
    <!--methods: {-->
        <!--fetchData () {-->
            <!--this.error = this.post = null;-->
            <!--this.loading = true;-->
            <!--console.log(`Route param ${this.$route.params.id}`);-->
            <!--// replace `getPost` with your data fetching util / API wrapper-->
            <!--// getPost(this.$route.params.id, (err, post) => {-->
            <!--//     this.loading = false;-->
            <!--//     if (err) {-->
            <!--//         this.error = err.toString()-->
            <!--//     } else {-->
            <!--//         this.post = post-->
            <!--//     }-->
            <!--// })-->
        <!--}-->
    <!--}-->
  <!--// name: "Hello",-->
  <!--//-->
  <!--// asyncData(store) {-->
  <!--//   return store.dispatch("fetchPost")-->
  <!--// },-->
  <!--//-->
  <!--// mounted() {-->
  <!--//   this.$store.dispatch("fetchPost")-->
  <!--// },-->
  <!--//-->
  <!--// data() {-->
  <!--//   return {-->
  <!--//     msg: "Hello"-->
  <!--//   }-->
  <!--// },-->
  <!--// components: {-->
  <!--//   TestVue-->
  <!--// },-->
  <!--// computed: {-->
  <!--//   post() {-->
  <!--//     return this.$store.state.post-->
  <!--//   }-->
  <!--// }-->
<!--}-->
<!--</script>-->
