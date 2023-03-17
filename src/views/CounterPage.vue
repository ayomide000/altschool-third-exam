<template>  
  <div :class="style.counterWrap">
  <h2 :class="style.counter"> Counter:  
  <span :class="valueCount">{{ count }}</span> </h2>
  <!-- count > 0 ? 'style.positive' : count < 0 ? 'style.negative' : null" -->
  <div :class="style.incDecCont">
      <button :class="style.decrement" @click="decrement">-</button>
      <button :class="style.increment" @click="increment">+</button>
  </div>
  <div :class="style.inputCont">
  <!-- {{ countInput }} -->
    <!-- <input type="number" v-model.number="countInput" />  -->
    <input type="number" :value="countInput" @change="updateInput" @keyup.enter="setValue" :class="style.input"/>
    <button :class="style.set" @click="setValue">Set Count</button>
  </div>
  
    <button :class="style.reset" @click="reset">Reset</button>

  <h1 className="text-blue-500 text-center font-bold text-2xl">A counter app</h1>
  </div>
</template>

<script>

   import {computed } from 'vue';
   import {useStore} from 'vuex';

  export default {
      name: 'CounterPage',
      data: () => {
      return {
        style: {
          counterWrap: `h-[50vh] mx-5 flex flex-col justify-between`,
          counter: `text-3xl font-bold text-center`,
          countSize: `text-5xl`,
          inputCont: `flex mx-3  border-none outline-none`,
          incDecCont: `w-1/2 mx-auto flex justify-between`,
          increment: `text-green-500 transition-all ease-in-out font-bold text-3xl text-center border-0 bg-white p-4 shadow rounded-full hover:shadow-2xl hover:bg-green-500 hover:text-white duration-500`,
          decrement: `text-yellow-300 transition-all ease-in-out font-bold text-3xl text-center border-0 bg-white p-4 shadow rounded-full hover:shadow-2xl hover:bg-yellow-400 hover:text-white duration-500`,
          reset: `text-red-500 inline w-1/4 mx-auto transition-all ease-in-out  text-lg text-center border-0 bg-white p-2 shadow rounded-full hover:shadow-2xl hover:bg-red-500 hover:text-white duration-500`,
          input: `bg-gray-50 border border-blue-300 text-gray-900 text-xl rounded-l-lg focus:ring-blue-500 focus:bg-white font-bold text-3xl focus:border-blue-500 block w-9/12 p-2.5 dark:bg-gray-400 dark:border-0 dark:text-slate-900  dark:focus:bg-white xss:w-8/12`,
          set: `bg-gray-50 border-0 bg-transparent text-center rounded-r-lg hover:bg-slate-700 hover:text-blue-500 w-3/12 dark:hover:bg-white dark:text-white dark:hover:text-blue-500 xss:text-sm xss:w-4/12`,
          negative: `animate-count text-red-500 text-5xl`,
          positive: `animate-count text-green-600 text-5xl`
        }
      }
  },

  computed: {
    valueCount() {
      return this.count >= 0 ? this.style.positive : this.count < 0 ? this.style.negative : null
    }
  },

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
<style>
.text-green {
  color: green;
  font-size: 4rem;
};
.text-red {
  color: red
}
</style>


