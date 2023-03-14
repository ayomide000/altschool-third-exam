<template>
  <h1 className="text-blue-500">This is a counter page</h1>
  <h2> Count:  {{ count }}</h2>
  <div class="input">
  {{ countInput }}
    <!-- <input type="number" v-model.number="countInput" />  -->
    <input type="number" :value="countInput" @change="updateInput" @keyup.enter="setValue"/>
  </div>
  <div>
    <button @click="decrement">Decrement</button>
    <button @click="reset">Reset</button>
    <button @click="increment">Increment</button>
    <button @click="setValue">Set Count</button>
  </div>
</template>

<script>
// import counter from '../composables/counter'

// import { mapState, mapActions } from "vuex";

// export default {
  // setup() {
  //     const { count, increment, decrement, reset} = counter()

  //     return {count, increment, decrement, reset}
  // }


//   computed: {
//     ...mapState({
//       count: (state) => state.defaultCount,
//       countInput: (state) => state.form.count,
//     }),
//   },
//   methods: {
//     ...mapActions([
//         'increment',
//         'decrement',
//         'reset'
//     ]),
   
//     updateInput(e) {
//         if (!this.$store.state.form.count) { 
//              e.preventDefault()
//             this.$store.dispatch("updateInput", e.target.value);
//         } else {
//             console.log('not an empty string');
//         }
//         },
//     setValue() {
//         if (this.$store.state.form.count) {
//             this.$store.dispatch('setValue', this.countInput)
//             this.$store.state.form.count = ''
//             console.log('input accessed');
//         } else {
//             console.log('input clicked');
//         }
        
//     },
    
//   },

// };
   import {computed } from 'vue';
   import {useStore} from 'vuex';


    export default {
      setup () {
        const store = useStore();

        return {
          // accessing states
          count: computed(() => store.state.defaultCount),
          countInput: computed(() => store.state.form.count),
          // accessing actions
          increment: () => store.dispatch('increment'),
          decrement: () => store.dispatch('decrement'),
           reset: () => store.dispatch('reset'),
          updateInput: (e) => {
              if (!store.state.form.count) {
                       e.preventDefault() 
                      store.dispatch("updateInput", e.target.value);
                      console.log('input updated');
              } else {
                      console.log('not an empty string');
                  }
          },
          setValue: () => {
                if (store.state.form.count) {
                    store.dispatch('setValue', store.state.form.count)
                    store.state.form.count = ''
                    console.log('input accessed');
                } else {
                    console.log('input clicked');
                }

            },
        }
        
      }
    }




</script>



