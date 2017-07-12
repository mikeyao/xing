<template>
  <div id="app">
    <nav class="nav container">
      <div class="nav-left">
        <a class="nav-item">
          <h1 class="title">Xing Li</h1>
        </a>
      </div>

      <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
      <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>

      <!-- This "nav-menu" is hidden on mobile -->
      <!-- Add the modifier "is-active" to display it on mobile -->
      <div class="nav-right nav-menu">
        <a class="nav-item">
          Projects
        </a>
        <a class="nav-item">
          Artworks
        </a>
        <a class="nav-item">
          About
        </a>
        <a class="nav-item">
          Resume
        </a>

      </div>
    </nav>
    <!-- <newsbyte></newsbyte> -->
    <praiseworthy></praiseworthy>
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
