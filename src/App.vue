<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  components: {
    'navigation': require('./components/nav.vue'),
    'newsbyte': require('./components/newsbyte.vue'),
    'praiseworthy': require('./components/praiseworthy.vue'),
  }
}
</script>

<style lang="sass" src="bulma"></style>
<style lang="scss">
  #app {
    font-family: 'Open Sans', sans-serif;
    // max-width: 1024px;
    // margin: 0 auto;
    // padding: 0 1.5rem;
    h1, h2, h3 {
      font-family: 'Francois One', sans-serif;
    }
  }

  // h1 {
  //   font-size: 1.5rem;
  //   text-transform: uppercase;
  //   font-family: 'PT Sans', sans-serif;
  // }

  // h2 {
  //   font-size: 1.5rem;
  //   text-transform: uppercase;
  //   text-align: middle;
  //   font-family: 'Roboto', sans-serif;
  // }

  // h3 {
  //   font-size: 1.25rem;
  //   text-transform: uppercase;
  //   font-family: 'Roboto', sans-serif;
  // }

</style>
