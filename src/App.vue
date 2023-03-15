<template>
  <div :class="style.appCont">
  <NavLink/>
  <FooterPage/>
  </div>
   <!-- <div id="nav">
   <div>Akande Counter App</div>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/counter">Counter</router-link>
      </div> -->
   <!-- <router-view/> -->
</template>

<script>
import NavLink from './components/NavLink.vue';
import FooterPage from './components/FooterPage.vue'

export default { 
  name: 'App',
  components: { NavLink, FooterPage},
  data: () => {
    return {
      style: {
        appCont: `h-screen max-w-xl bg-white text-slate-900 mx-auto mt-0 font-serif flex flex-col justify-between dark:bg-slate-900 dark:text-white`
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
 color: #2c3e50;
 }

#nav {
  padding: 30px;
} */

/* #nav a {
  font-weight: bold;
  color: #2c3e50;
}

 #nav a.router-link-exact-active {
  color: #42b983;
 } */
</style>
