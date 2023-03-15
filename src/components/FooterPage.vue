<template>
    <footer :class="style.footer">
    <p>Copyright &copy; Akande Gbolahan</p>
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