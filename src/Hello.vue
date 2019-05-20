<template>
  <div>
    Hello World!
    <p>
      <router-link to="/">Go To Home</router-link>
      <router-link to="/about">Go To About</router-link>
    </p>
    <router-view></router-view>
    <!--<div>{{ msg }}</div>-->
    <!--<div>{{ post.title }}</div>-->
  </div>
</template>

<script>
const TestVue = () => import(/* webpackChunkName: "below-fold" */ './components/test.vue'); // eslint-disable-line
export default {
  name: "Hello",

  asyncData(store) {
    return store.dispatch("fetchPost")
  },

  mounted() {
    this.$store.dispatch("fetchPost")
  },

  data() {
    return {
      msg: "Hello"
    }
  },
  components: {
    TestVue
  },
  computed: {
    post() {
      return this.$store.state.post
    }
  }
}
</script>
