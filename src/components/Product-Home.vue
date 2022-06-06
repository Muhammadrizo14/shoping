<template>
  <div>
    <Products @ToDetailComponents="ToDetailComponents" />
  </div>
</template>

<script>

    import Products from "@/components/Products";
    export default {
        name: "Products-Home",
        components: {Products},
        props(){
          return {

          }
        },
    }
</script>

