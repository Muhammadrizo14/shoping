<template>
  <div>
    <h1>{{details.title}}</h1>
    {{this.details.price}}
  </div>
</template>

<script>
import axios from "axios"
    export default {
        name: "DetailsComponents-item",
      data() {
        return {
          details:[],
          ayub: ""
        }
      },
      mounted() {
        const a =  this.$route.params['id']
        console.log(a)
        this.ayub = a

        axios.get(`http://localhost:3000/products/${a}`).then(res=>{
          const data = res.data;
          this.details = data
          console.log(this.details);
          // const post = data.filter((obj, a)=>{
          //   return a == obj.id;
          // })

          // this.data = post
        })
      }
    }
</script>

<style scoped>

</style>