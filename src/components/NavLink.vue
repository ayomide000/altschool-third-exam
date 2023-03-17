
<template>
  <!-- <NavLink/> -->
  <nav :class="style.nav">
    <h2 :class="style.logo"><router-link to="/" > Akande Counter</router-link></h2>
    <div :class="style.navLink">
   <router-link to="/" :class="style.homeLink">Home</router-link> 

    <router-link to="/counter"  :class="style.counterLink" >Counter</router-link>
    <a href="https://github.com/ayomide000/altschool-third-exam.git" :class="style.gitCont"><img :class="style.github" src="../assets/icons/github.svg" alt="github" target="_blank" rel="noopener noreferrer"></a>
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
        nav: `flex justify-between my-2  shadow-lg dark:shadow-blue-900`,
        logo: `font-bold p-2 mt-2 text-center ss:text-sm sss:text-xs sss:mt-3 xss:text-xss`,
        navLink: `text-blue-400 p-2 flex xss:mt-1`,
        homeLink: `mr-2 p-2 rounded-lg transition-all ease-in-out duration-500 hover:bg-slate-700 dark:hover:bg-white xss:text-xss`,
        counterLink: `p-2  rounded-lg transition-all ease-in-out duration-500  hover:bg-slate-700 dark:hover:bg-white xss:text-xss `,
        gitCont: `p-2 bg-transparent hover:bg-transparent rounded-lg transition-all ease-in-out duration-500  dark:hover:bg-white`,
        github: `w-5 h-5 dark:bg-white `,
        toggle: `mt-1 flex ml-2 p-2  rounded-lg transition-all ease-in-out duration-500 dark:hover:bg-white`,
        dark: `w-5 h-5 -mt-1 bg-white`,
        light: `w-5 h-5 -mt-1`
      }
    }
  }

}
</script>


