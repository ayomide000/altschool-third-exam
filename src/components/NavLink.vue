
<template>
  <!-- <NavLink/> -->
  <nav :class="style.nav">
    <h2 :class="style.logo">Akande Gbolahan</h2>
    <div :class="style.navLink">
   <router-link to="/" :class="style.homeLink">Home</router-link> 

    <router-link to="/counter"  :class="style.counterLink" >Counter</router-link>
    <a href="#" :class="style.gitCont"><img :class="style.github" src="../assets/icons/github.svg" alt="github"></a>
    <button :class="style.toggle" @click="isDark = !isDark">
    <img :class="style.dark" src="../assets/icons/moon.svg" alt="dark" v-if="isDark === true">
    <img :class="style.light" src="../assets/icons/sun.svg" alt="light" v-if="isDark === false">
    </button>
    </div>
  </nav>
  <router-view />
</template>

<script>

import { ref, watch} from 'vue';

export default {
  name: 'NavLink',
   setup() {
    const isDark = ref(true)
    watch (isDark, (val) => {
      val? document.body.classList.add('dark') : document.body.classList.remove('dark')
    })
    return {isDark}
  },
 
  data: () => {
    return {
      style: {
        nav: `flex justify-between my-3 mx-2 shadow-lg dark:shadow-blue-900`,
        logo: `font-bold p-2`,
        navLink: `text-blue-400 p-2 flex`,
        homeLink: `mr-2 p-2 rounded-lg transition-all ease-in-out duration-500 hover:bg-slate-700 dark:hover:bg-white`,
        counterLink: `p-2  rounded-lg transition-all ease-in-out duration-500  hover:bg-slate-700 dark:hover:bg-white`,
        gitCont: `p-2 bg-transparent hover:bg-transparent rounded-lg transition-all ease-in-out duration-500  dark:hover:bg-white`,
        github: `w-5 h-5 dark:bg-white`,
        toggle: `mt-1 flex ml-2 p-2  rounded-lg transition-all ease-in-out duration-500 dark:hover:bg-white`,
        dark: `w-5 h-5 -mt-1 bg-white`,
        light: `w-5 h-5 -mt-1`
      }
    }
  }

}
</script>


