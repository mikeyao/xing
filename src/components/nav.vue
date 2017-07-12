<template>
  <div class="container">
    <nav class="navbar">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <h1 class="title"><strong>Xing Li</strong></h1>
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
            <a class="navbar-link is-active" href="#">Projects</a>
            <div class="navbar-dropdown">
              <router-link class="navbar-item" to="/laughly">Laughly</router-link>
              <router-link class="navbar-item" to="/newsbyte">Newsbyte</router-link>
              <router-link class="navbar-item" to="/praiseworthy">Praiseworthy</router-link>
            </div>
          </div>

          <div class="navbar-item has-dropdown is-hoverable">
            <p class="navbar-link">Artworks</p>
            <div class="navbar-dropdown">
              <router-link class="navbar-item" to="/">Artwork 1</router-link>
              <router-link class="navbar-item" to="/">Artwork 2</router-link>
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