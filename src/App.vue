<template>
  <div>
    <NavBar/>
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import HomePage from './views/HomePage.vue';
export default {
  components:{
    HomePage,
    NavBar
  },
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>