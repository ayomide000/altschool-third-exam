<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div>
      <h1>Welcome 👋</h1>
    </div>
    <div class="animation-counter">
    <p>Find animation that fits this</p>
    </div>
    <section>
    <div>
     Counter app with Vuejs that performs increment, decrement, reset and setVaue functions, using Vuex as state management
    </div>
    <div class="link">
    <div><RouterLink to="/counter">See Counter</RouterLink> </div>
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
  }
}
</script>
