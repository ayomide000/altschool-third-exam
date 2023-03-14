<template>
  <NavLink/>
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

export default { 
  name: 'App',
  components: { NavLink,}

 }
</script>


 <style> 
#app { 
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
