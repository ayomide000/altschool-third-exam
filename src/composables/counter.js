import { ref } from "vue";

const counter = () => {
  const count = ref(0);
  const increment = () => {
    count.value++;
  };
  const decrement = () => {
    count.value--;
  };
  const reset = () => {
    count.value = 0;
  };
  // const setValue = () => {

  // };
  return { count, increment, decrement, reset };
  // VUEX
};

export default counter;
