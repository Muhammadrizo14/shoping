<template>
  <MenuBar/>
  <div>
    <Products />
  </div>
</template>

<script>
  import Products from "@/components/Products";
  import MenuBar from "@/components/MenuBar";
    export default {
        name: "Home",
        components: { Products,MenuBar }
    }
</script>

<style scoped>

</style>