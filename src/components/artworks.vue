<template>
  <div class="artworks">
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
    
    <section class="section" v-if="selected == 'church_home_collection'">
      <div class="columns">
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'church_home_collection'}" src='../assets/artworks/church_home_collection/church_home_collection_6.jpg'>
          </figure>
        </div>
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'church_home_collection'}" src='../assets/artworks/church_home_collection/church_home_collection_1.jpg'>
          </figure>
        </div>
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'church_home_collection'}" src='../assets/artworks/church_home_collection/church_home_collection_0.jpg'>
          </figure>
        </div>
      </div>
      
      <div class="columns">
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'church_home_collection'}" src='../assets/artworks/church_home_collection/church_home_collection_2.jpg'>
          </figure>
        </div>
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'church_home_collection'}" src='../assets/artworks/church_home_collection/church_home_collection_5.jpg'>
          </figure>
        </div>
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'church_home_collection'}" src='../assets/artworks/church_home_collection/church_home_collection_7.jpg'>
          </figure>
        </div>
      </div>
      
      
    </section>
    
    <section class="section" v-if="selected == 'black_and_white_home_collection'">
      <div class="columns">
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'black_and_white_home_collection'}" src='../assets/artworks/black_and_white_home_collection/black_and_white_home_collection_4.jpg'>
          </figure>
        </div>
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'black_and_white_home_collection'}" src='../assets/artworks/black_and_white_home_collection/black_and_white_home_collection_6.jpg'>
          </figure>
        </div>
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'black_and_white_home_collection'}" src='../assets/artworks/black_and_white_home_collection/black_and_white_home_collection_2.jpg'>
          </figure>
        </div>
      </div>
      
      <div class="columns">
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'black_and_white_home_collection'}" src='../assets/artworks/black_and_white_home_collection/black_and_white_home_collection_3.jpg'>
          </figure>
        </div>
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'black_and_white_home_collection'}" src='../assets/artworks/black_and_white_home_collection/black_and_white_home_collection_0.jpg'>
          </figure>
        </div>
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'black_and_white_home_collection'}" src='../assets/artworks/black_and_white_home_collection/black_and_white_home_collection_5.jpg'>
          </figure>
        </div>
      </div>
      
      
    </section>
    
    <section class="section" v-if="selected == 'nature_scarf_collection'">
      <div class="columns">
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'nature_scarf_collection'}" src='../assets/artworks/nature_scarf_collection/nature_scarf_collection_6.jpg'>
          </figure>
        </div>
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'nature_scarf_collection'}" src='../assets/artworks/nature_scarf_collection/nature_scarf_collection_7.jpg'>
          </figure>
        </div>
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'nature_scarf_collection'}" src='../assets/artworks/nature_scarf_collection/nature_scarf_collection_2.jpg'>
          </figure>
        </div>
      </div>
      
      <div class="columns">
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'nature_scarf_collection'}" src='../assets/artworks/nature_scarf_collection/nature_scarf_collection_1.jpg'>
          </figure>
        </div>
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'nature_scarf_collection'}" src='../assets/artworks/nature_scarf_collection/nature_scarf_collection_4.jpg'>
          </figure>
        </div>
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'nature_scarf_collection'}" src='../assets/artworks/nature_scarf_collection/nature_scarf_collection_5.jpg'>
          </figure>
        </div>
      </div>
      

    </section>
    
    <section class="section" v-if="selected == 'peking_opera_blues_swimwear_collection'">
      <div class="columns">
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'peking_opera_blues_swimwear_collection'}" src='../assets/artworks/peking_opera_blues_swimwear_collection/peking_opera_blues_swimwear_collection_0.jpg'>
          </figure>
        </div>
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'peking_opera_blues_swimwear_collection'}" src='../assets/artworks/peking_opera_blues_swimwear_collection/peking_opera_blues_swimwear_collection_3.jpg'>
          </figure>
        </div>
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'peking_opera_blues_swimwear_collection'}" src='../assets/artworks/peking_opera_blues_swimwear_collection/peking_opera_blues_swimwear_collection_6.jpg'>
          </figure>
        </div>
      </div>
      
      
    </section>
    
    <section class="section" v-if="selected == 'san_francisco_womens_wear_collection'">
      <div class="columns">
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'san_francisco_womens_wear_collection'}" src='../assets/artworks/san_francisco_womens_wear_collection/san_francisco_womens_wear_collection_0.jpg'>
          </figure>
        </div>
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'san_francisco_womens_wear_collection'}" src='../assets/artworks/san_francisco_womens_wear_collection/san_francisco_womens_wear_collection_7.jpg'>
          </figure>
        </div>
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'san_francisco_womens_wear_collection'}" src='../assets/artworks/san_francisco_womens_wear_collection/san_francisco_womens_wear_collection_2.jpg'>
          </figure>
        </div>
      </div>
      
      <div class="columns">
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'san_francisco_womens_wear_collection'}" src='../assets/artworks/san_francisco_womens_wear_collection/san_francisco_womens_wear_collection_1.jpg'>
          </figure>
        </div>
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'san_francisco_womens_wear_collection'}" src='../assets/artworks/san_francisco_womens_wear_collection/san_francisco_womens_wear_collection_4.jpg'>
          </figure>
        </div>
        <div class="column">
          <figure class="image">
            <img v-img="{group: 'san_francisco_womens_wear_collection'}" src='../assets/artworks/san_francisco_womens_wear_collection/san_francisco_womens_wear_collection_5.jpg'>
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
      selected: 'church_home_collection',
    }
  },
  
  computed: {
    artworks (){
      return [
        { label: 'Church', src: 'church_home_collection', count: 8},
        { label: 'Black & White', src: 'black_and_white_home_collection', count: 7},
        { label: 'Nature', src: 'nature_scarf_collection', count: 8},
        { label: 'Peking Opera', src: 'peking_opera_blues_swimwear_collection', count: 8},
        { label: 'San Francisco', src: 'san_francisco_womens_wear_collection', count: 8},
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
      //   // row.push(require('../assets/artworks/church_home_collection/0.jpg'))
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
  .artworks {
    .column {
      padding: 1.25rem;
    }
    img {
      width: 280px;
      height: 375px;
    }
  }
</style>
