<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/ui/TheHeader.vue';

export default {
  components: {
    TheHeader
  }
  
  }

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

html{
  font-family: 'Roboto', sans-serif;
}
* {
  box-sizing: border-box;
}
  body{
    margin: 0;
  }
</style>
