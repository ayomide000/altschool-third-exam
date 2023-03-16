<template>
    <footer :class="style.footer">
    <p> &copy; Copyright Powered by: Akande Gbolahan</p>
    </footer>
</template>


<script>


export default { 
  name: 'FooterPage',
  data: () => {
    return {
      style: {
            footer: `text-center`
      }
    }
  }

 }
</script>