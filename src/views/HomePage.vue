<template>
  <div :class="style.home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div :class="style.welcomeCont" >
      <h1 :class="style.welcome">Welcome</h1>
      <div :class="style.wave">👋</div>
    </div>
    <div :class="style.animationCounter">
    <img :class="style.imageCounter" src="../assets/counter.png" alt="counter">
    <p>A Counter </p>
    </div>
    <section :class="style.homeSect">
    <div>
     Counter app with Vuejs that performs increment, decrement, reset and setVaue functions, using Vuex as state management
    </div>
    <div :class="style.homeLinkCont">
    <RouterLink to="/counter" :class="style.homeLink">See Counter</RouterLink>
    <a href="" :class="style.homeLink">Github</a>
    // insert the github in the navlink and import the icon
    </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  // name: 'HomePage',
  components: {
    // HelloWorld
  },
    data: () => {
    return {
      style: {
        home: `mx-3 h-[70vh] sm:mb-9`,
        welcomeCont: `flex justify-center mb-5`,
        welcome: `text-center font-bold text-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text`,
        wave: `animate-wave text-3xl -mt-1 ml-1 `,
        animationCounter: `text-3xl text-blue-300 text-center sm:mb-3 `,
        imageCounter: `mx-auto`,
        homeSect: `text-xl mt-8 sm:mb-4`,
        homeLinkCont: `mt-4 `,
        homeLink: `transition-all ease-in-out duration-500 hover:bg-blue-700 hover:text-white mt-2 rounded-lg p-2`
      }
    }
  }
}
</script>
