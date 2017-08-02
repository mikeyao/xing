<template>
  <div class="photography">
    <div class="tabs is-centered">
      <ul>
        <li v-for="albumn in artworks" :class="{ 'is-active': albumn.src == selected }"><a @click='pickAlbumn(albumn)'>{{ albumn.label }}</a></li>
      </ul>
    </div>
    <!-- <section class="section">
      <div class="columns" v-for="row in photos">
        <div class="column" v-for="photo in row">
          <figure class="image">
            <img v-img="{group: 'church_home_collection'}" :src='photo'>
          </figure>
        </div>
      </div>
    </section> -->
    
    <section class="section" v-if="selected == 'animals'">
      <div class="columns">
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'animals'}" src='../assets/artworks/photography/animals/animals_3.jpg'>
          </figure>
        </div>
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'animals'}" src='../assets/artworks/photography/animals/animals_1.jpg'>
          </figure>
        </div>
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'animals'}" src='../assets/artworks/photography/animals/animals_2.jpg'>
          </figure>
        </div>
      </div>
      
      <div class="columns">
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'animals'}" src='../assets/artworks/photography/animals/animals_0.jpg'>
          </figure>
        </div>
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'animals'}" src='../assets/artworks/photography/animals/animals_4.jpg'>
          </figure>
        </div>
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'animals'}" src='../assets/artworks/photography/animals/animals_5.jpg'>
          </figure>
        </div>
      </div>
      
      
    </section>
    
    <section class="section" v-if="selected == 'flowers'">
      <div class="columns">
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'flowers'}" src='../assets/artworks/photography/flowers/flowers_0.jpg'>
          </figure>
        </div>
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'flowers'}" src='../assets/artworks/photography/flowers/flowers_1.jpg'>
          </figure>
        </div>
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'flowers'}" src='../assets/artworks/photography/flowers/flowers_2.jpg'>
          </figure>
        </div>
      </div>
      
      <div class="columns">
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'flowers'}" src='../assets/artworks/photography/flowers/flowers_3.jpg'>
          </figure>
        </div>
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'flowers'}" src='../assets/artworks/photography/flowers/flowers_4.jpg'>
          </figure>
        </div>
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'flowers'}" src='../assets/artworks/photography/flowers/flowers_5.jpg'>
          </figure>
        </div>
      </div>
      
      
    </section>
    
    <section class="section lights" v-if="selected == 'lights'">
      <div class="columns first-row">
        <div class="column is-two-thirds">
          <figure class="image">
            <img v-img="{group: 'lights'}" src='../assets/artworks/photography/lights/lights_2.jpg'>
          </figure>
        </div>
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'lights'}" src='../assets/artworks/photography/lights/lights_1.jpg'>
          </figure>
        </div>
      </div>
      
      <div class="columns">
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'lights'}" src='../assets/artworks/photography/lights/lights_0.jpg'>
          </figure>
        </div>
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'lights'}" src='../assets/artworks/photography/lights/lights_3.jpg'>
          </figure>
        </div>
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'lights'}" src='../assets/artworks/photography/lights/lights_4.jpg'>
          </figure>
        </div>
      </div>
      

    </section>
    
    <section class="section" v-if="selected == 'stanford'">
      <div class="columns">
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'stanford'}" src='../assets/artworks/photography/stanford/stanford_0.jpg'>
          </figure>
        </div>
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'stanford'}" src='../assets/artworks/photography/stanford/stanford_1.jpg'>
          </figure>
        </div>
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'stanford'}" src='../assets/artworks/photography/stanford/stanford_2.jpg'>
          </figure>
        </div>
      </div>
      
      
    </section>
    
    
  </div>
</template>

<script>
// const pathToArtworks = require.context('../assets/artworks', true);
export default {
  data (){
    return {
      selected: 'lights',
    }
  },
  
  computed: {
    artworks (){
      return [
        { label: 'Animals', src: 'animals', count: 8},
        { label: 'Flowers', src: 'flowers', count: 7},
        { label: 'Lights', src: 'lights', count: 8},
        { label: 'Hoover Tower', src: 'stanford', count: 8},
      ]
    },
    
    photos (){
      return 'next time'
      // var artwork = this.artworks.filter((artwork) => {
      //   return artwork.src == this.selected
      // })[0]
      // var photos = []
      // const numPerRow = 3
      // var row = []
      // for (var i = 0; i < artwork.count; i++){
      //   row.push(require(pathToArtworks(`${artwork.src}/${artwork.src}_${i}.jpg`, true)))
      //   // row.push(require('../assets/artworks/animals/0.jpg'))
      //   if (row.length >= numPerRow){
      //     photos.push(row)
      //     row = []
      //   }
      // }
      // if (row.length){
      //   photos.push(row)
      // }
      // return photos
    },
    
  },
  
  methods: {
    pickAlbumn (albumn){
      this.selected = albumn.src
    }
  }
}
</script>

<style lang="scss">
  .photography {
    .column {
      padding: 1.25rem;
    }
    .lights {
      .first-row img {
        height: 304px;
      }
    }
    
  }
</style>
