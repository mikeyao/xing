<template>
  <div class="sidebar">
    <ul v-if="app == 'praiseworthy'">
      <li><a href="#Praiseworthy-Project-Intro">Project Intro</a></li>
      <li><a href="#Praiseworthy-Design-Process">Design Process</a></li>
      <li><a href="#Praiseworthy-LoFi-Phase">Lo-Fi Phase</a></li>
      <li><a href="#Praiseworthy-HiFi-Phase">Hi-Fi Phase</a></li>
    </ul>
    <ul v-if="app == 'newsbite'">
      <li><a href="#Newsbite-Project-Intro">Project Intro</a></li>
      <li><a href="#Newsbite-Design-Process">Design Process</a></li>
      <li><a href="#Newsbite-LoFi-Phase">Lo-Fi Phase</a></li>
      <li><a href="#Newsbite-HiFi-Phase">Hi-Fi Phase</a></li>
    </ul>
    <ul v-if="app == 'laughly'">
      <li><a href="#Laughly-Project-Intro">Project Intro</a></li>
      <li><a href="#Laughly-Design-Process">Design Process</a></li>
      <li><a href="#Laughly-LoFi-Phase">Lo-Fi Phase</a></li>
      <li><a href="#Laughly-HiFi-Phase">Hi-Fi Phase</a></li>
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