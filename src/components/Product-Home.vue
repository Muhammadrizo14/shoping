<template>
  <div>
    <Products @ToDetailComponents="ToDetailComponents" />
  </div>
</template>

<script>

    import Products from "@/components/Products";
    import {mapActions} from "vuex";
    export default {
        name: "Products-Home",
        components: {Products},
        props(){
          return {

          }
        },
        methods: {
            ...mapActions([
                "TO_DEATILS_COMPONENTS"
            ])
,            ToDetailComponents () {
                console.log(this.TO_DEATILS_COMPONENTS.data)
            }
        }
    }
</script>

