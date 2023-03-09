<template>
    <h2>This is a counter page</h2>
    <h3>{{ count }}</h3>
    <div class="input">
        <!-- <input type="number" v-model.number="count"> -->
     <input type="number" :value="count" @change="updateMessage" />
    </div>
    <div>
    <button @click="decrement">Decrement</button>
    <button @click="reset">Reset</button>
    <button @click="increment">Increment</button>
    
    </div>
</template>

<script>
// import counter from '../composables/counter'

import { mapState } from 'vuex'

export default {
    // setup() {
    //     const { count, increment, decrement, reset} = counter()
        
    //     return {count, increment, decrement, reset}
    // }


    //     VUEX

    computed:  {
        ...mapState({
            count: state => state.defaultCount,
            message: state => state.obj.count
                //   count() {
                //     return this.$store.getters.count
                //   }
        }),
    },
    methods: {
        increment() {
            this.$store.dispatch('increment')
        },
        decrement() {
            this.$store.dispatch('decrement')
        },
        reset() {
            this.$store.dispatch('reset')
        },
        updateMessage(e) {
            this.$store.dispatch('updateMessage', e.target.value)
        }
    }

}
</script>  