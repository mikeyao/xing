<template>
  <div class="sidebar">
    <ul v-if="app == 'praiseworthy'">
      <li><router-link to="/praiseworthy#Praiseworthy-Project-Intro">Project Intro</router-link></li>
      <li><router-link to="/praiseworthy#Praiseworthy-Design-Process">Design Process</router-link></li>
      <li><router-link to="/praiseworthy#Praiseworthy-LoFi-Phase">Lo-Fi Phase</router-link></li>
      <li><router-link to="/praiseworthy#Praiseworthy-HiFi-Phase">Hi-Fi Phase</router-link></li>
    </ul>
    <ul v-if="app == 'newsbite'">
      <li><router-link to="/newsbite#Newsbite-Project-Intro">Project Intro</router-link></li>
      <li><router-link to="/newsbite#Newsbite-Design-Process">Design Process</router-link></li>
      <li><router-link to="/newsbite#Newsbite-LoFi-Phase">Lo-Fi Phase</router-link></li>
      <li><router-link to="/newsbite#Newsbite-HiFi-Phase">Hi-Fi Phase</router-link></li>
    </ul>
    <ul v-if="app == 'laughly'">
      <li><router-link to="/laughly#Laughly-Project-Intro">Project Intro</router-link></li>
      <li><router-link to="/laughly#Laughly-Design-Process">Design Process</router-link></li>
      <li><router-link to="/laughly#Laughly-LoFi-Phase">Lo-Fi Phase</router-link></li>
      <li><router-link to="/laughly#Laughly-HiFi-Phase">Hi-Fi Phase</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      app: {
        type: String,
      }
    },
    
  }
</script>

<style lang="scss">
  .sidebar {
    ul > li {
      padding: 1rem 0;
    }
  }
</style>