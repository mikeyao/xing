<template>
  <div class="navigation container" id="top-navigation">
    <nav class="navbar">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <h1 class="title is-3"><strong>Xing Li</strong></h1>
        </router-link>
        <div class="navbar-burger" @click="toggleBurgerMenu"
          :class="{ 'is-active': burgerMenuIsOpen }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': burgerMenuIsOpen }">
        <div class="navbar-start">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link is-active" href="/#Projects">Projects</a>
            <!-- <router-link class="navbar-item" to="/laughly">Laughly</router-link> -->
            <div class="navbar-dropdown">
              <router-link class="navbar-item" to="/laughly">Laughly</router-link>
              <router-link class="navbar-item" to="/newsbite">Newsbite</router-link>
              <router-link class="navbar-item" to="/praiseworthy">Praiseworthy</router-link>
            </div>
          </div>

          <div class="navbar-item has-dropdown is-hoverable">
            <!-- <p class="navbar-item">Artworks</p> -->
            <router-link class="navbar-link" to="/artworks">Artworks</router-link>
            <div class="navbar-dropdown">
              <router-link class="navbar-item" to="/artworks">Textile Design</router-link>
              <router-link class="navbar-item" to="/photography">Photography</router-link>
            </div>
          </div>

          <router-link class="navbar-item" to="/about">About</router-link>
          <router-link class="navbar-item" to="/Resume">Resume</router-link>
          
        </div>
        
      </div>
        
    </nav>
  </div>
</template>

<script>
  export default {
    data (){
      return {
        burgerMenuIsOpen: false,
      }
    },

    methods: {
      toggleBurgerMenu (){
        this.burgerMenuIsOpen = !this.burgerMenuIsOpen
      }
    }
  }
</script>

<style lang="scss">
  .navigation {
    position: fixed;
    left: 0;
    right: 0;
    background-color: white;
    z-index: 2;
    box-shadow: 0 0 1px rgba(0,0,0,0.25);
  }
</style>