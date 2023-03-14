// const style = {
//   li: `text-purple-800`
// }


<template>
  <!-- <NavLink/> -->
  <div id="nav" >
    <div :class="style.li">Akande Counter App</div>
    <div class="text-green-500"> <router-link to="/" >Home</router-link></div> |
    <router-link to="/about">About</router-link> |
    <router-link to="/counter">Counter</router-link>
  </div>
  <router-view />
</template>

<script>
// import NavLink from './components/NavLink.vue';

export default {
  name: 'NavLink',
  // components: { NavLink,}
  data() {
    return {
      style: {
        li: `text-red-800`
      }
    }
  }

}
</script>


<style> #app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
 }

 #nav {
   padding: 30px;
 }

 #nav a {
   font-weight: bold;
   color: #2c3e50;
 }

 #nav a.router-link-exact-active {
   color: #42b983;
 }
</style>
