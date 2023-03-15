// const style = {
//   li: `text-purple-800`
// }


<template>
  <!-- <NavLink/> -->
  <nav :class="style.nav">
    <h2 :class="style.logo">Akande Gbolahan</h2>
    <div :class="style.navLink">
   <router-link to="/" :class="style.homeLink">Home</router-link> 
    <!-- <router-link to="/about" class="text-red-500">About</router-link>  -->
    <router-link to="/counter" :class="style.counterLink">Counter</router-link>
    </div>
  </nav>
  <router-view />
</template>

<script>
// import NavLink from './components/NavLink.vue';

export default {
  name: 'NavLink',
  // components: { NavLink,}
  data: () => {
    return {
      style: {
        nav: `flex justify-between my-3 mx-2 shadow-lg`,
        logo: `font-bold p-2`,
        navLink: `text-blue-400 p-2`,
        homeLink: `mr-2 p-2 rounded-lg transition-all ease-in-out duration-500 hover:bg-slate-700 dark:hover:bg-white`,
        counterLink: `p-2  rounded-lg transition-all ease-in-out duration-500  hover:bg-slate-700 dark:hover:bg-white`
      }
    }
  }

}
</script>


<style> 
/* #app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #d30d98;
 }

 #nav {
   padding: 30px;
 }

 #nav a {
   font-weight: bold;
   color: #2c3e50;
 } */

 /* #nav a.router-link-active {
  color: red;
 }

 #nav a.router-link-exact-active {
   color: #42b983;
 } */
</style>
