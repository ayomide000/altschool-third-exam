<template>
    <h2>This is a counter page</h2>
    <h3>{{ count }}</h3>
    <div>
    <button @click="decrement">Decrement</button>
    <button @click="reset">Reset</button>
    <button @click="increment">Increment</button>
    
    </div>
</template>

<script>
import counter from '../composables/counter'

export default {
    setup() {
        const { count, increment, decrement, reset} = counter()
        
        return {count, increment, decrement, reset}
    }
}
</script>