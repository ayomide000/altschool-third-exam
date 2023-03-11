<template>
  <h2>This is a counter page</h2>
  <h3>{{ count }}</h3>
  <div class="input">
    <!-- <input type="number" v-model.number="countInput" /> -->
    <input type="number" :value="countInput" @change="updateInput" />
  </div>
  <div>
    <button @click="decrement">Decrement</button>
    <button @click="reset">Reset</button>
    <button @click="increment">Increment</button>
    <button @click="setValue">Set Value</button>
  </div>
</template>

<script>
// import counter from '../composables/counter'

import { mapState, mapActions } from "vuex";

export default {
  // setup() {
  //     const { count, increment, decrement, reset} = counter()

  //     return {count, increment, decrement, reset}
  // }


  computed: {
    ...mapState({
      count: (state) => state.defaultCount,
      countInput: (state) => state.form.count,
    }),
  },
  methods: {
    ...mapActions([
        'increment',
        'decrement',
        'reset'
    ]),
   
    updateInput(e) {
        if (!this.$store.state.form.count) { 
             e.preventDefault() 
            this.$store.dispatch("updateInput", e.target.value);
        } else {
            console.log('not an empty string');
        }
        },
    setValue() {
        if (this.$store.state.form.count) {
            this.$store.dispatch('setValue', this.countInput)
            this.$store.state.form.count = ''
            console.log('input accessed');
        } else {
            console.log('input clicked');
        }
        
    },
    
  },
};
</script>
