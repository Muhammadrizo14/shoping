<template>
  <div>
    <DetailsComponentsItem />
  </div>
</template>

<script>
import DetailsComponentsItem from './DetailsComponents-item'


    export default {
        name: "DetailsComponents",
        components: {
            DetailsComponentsItem
        },
        data() {
            return {
                data: []
            }
        },

        mounted() {
            // axios.get('http://localhost:3000/products').then(res=>{
            //     const data = res.data;
            //     const a =  this.$route.params['id']
            //     console.log(a)
            //     const post = data.filter((obj, a)=>{
            //         // console.log(a + ' olasan hafiz  ')
            //         return obj.id === a;
            //     }).pop();
            //     console.log(post);
            //     this.data = post
            // })
        }
    }
</script>

<style>

</style>