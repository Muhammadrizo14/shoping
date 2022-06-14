<template>
  <MenuBar/>
  <div>
    <Products />
  </div>
</template>

<script>
  import Products from "@/components/Products";
  import MenuBar from "@/components/MenuBar";
  // import Input from "@/components/Input-localhost"
    export default {
        name: "Home",
        components: { Products,MenuBar }
    }
</script>

<style scoped>

</style>