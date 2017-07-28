<template>
  <div id="app">
    <navigation></navigation>
    <div class="app-content section">
      <div class="container">
        <div class="columns">
          <div class="column is-2">
            <sidebar class="sidebar" :app='app'></sidebar>
          </div>
          <div class="column is-9">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      jumpTo: '',
    }
  },
  
  watch: {
    '$route' (to, from){
      console.log(`To: ${to.path}, From: ${from.path}`)
      // Only if the path is different, then scroll to the top
      if (to.path !== from.path){
        window.scrollTo(0,0)
      }
      // Jump to ID if hash exists
      if (to.hash){
        document.querySelector(to.hash).scrollIntoView()
      }
    }
  },
  
  computed: {
    app (){
      return this.$route.path.slice(1)
    }
  },

  components: {
    'navigation': require('./components/nav.vue'),
    'sidebar': require('./components/sidebar.vue'),
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
    
    h1 {
      text-transform: uppercase;
      &:before {
        display: block;
        content: " ";
        margin-top: -3rem;
        height: 3rem;
        visibility: hidden;
      }
    }
    
    .sidebar {
      position: fixed;
      top: 100px;
    }
    
  }
  
  .fullscreen-v-img {
    z-index: 3;
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
