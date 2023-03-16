import { ref } from "vue";

const counter = () => {
  // const count = ref(0);
  // const increment = () => {
  //   count.value++;
  // };
  // const decrement = () => {
  //   count.value--;
  // };
  // const reset = () => {
  //   count.value = 0;
  // };

  const isDark = ref(true);

  watch: isDark,
    (val) => {
      val
        ? document.body.classList.add("dark")
        : document.body.classList.remove("dark");
    };
  // const setValue = () => {

  // };
  // return { count, increment, decrement, reset };
  return { isDark };
  // VUEX
};

export default counter;
