<template>
  <div>
    <router-link :to="'/product/' + i.id" v-for="i in info" :key="i.id">
          <Card class="card card-2">
            <template #header>
<!--              <img alt="user header" src="../assets/img/11168796-1.jpg" >-->
              <img alt="user header" :src="require('../assets/productimage/' + i.imageUrl )" >
            </template>
            <template #title>
              {{i.title}}
            </template>
            <template #content>
              {{i.price }}
            </template>
          </Card>
    </router-link>
  </div>
  <div class="container">
     <div class="wrapper-content">
       <div class="content">
         <div class="img">
           <img class="watch-img" alt="watch" src="../assets/img/11168796-1.jpg">
         </div>
         <div class="text">
           <h1 class="text-h1">App Watch</h1>
           <h2 class="text-h2">Duis Aute Irure</h2>
           <p class="text-p">$9.66</p>
         </div>
         <div class="p-rating p-readonly icons">
           <span class="p-rating-icon pi pi-star-fill"></span>
           <span class="p-rating-icon pi pi-star-fill"></span>
           <span class="p-rating-icon pi pi-star-fill"></span>
           <span class="p-rating-icon pi pi-star"></span>
           <span class="p-rating-icon pi pi-star"></span>
         </div>
         <div class="Buy-Now">

         </div>
       </div>
     </div>
  </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "Products",
        data() {
            return {
                info: [],
                rating: [
                    {"rating1": null},
                    {"rating2": null},
                    {"rating3": null},
                    {"rating4": null},
                ]
            }
        },
        mounted() {
            axios
                .get('http://localhost:3000/products')
                .then(response => (this.info = response.data))
        },
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
 .container {
   background-color: var(--surface-ground)!important;
   width: 100%;
   height: 800px;
   padding: 30px;
 }
 .icons{
   display: flex;
   justify-content: center;
 }
 .wrapper-content {
   width: 300px;
   height: 400px;
   background-color: #fff;
   -webkit-box-shadow: 0 4px 10px rgba(0,0,0,.03),0 0 2px rgba(0,0,0,.06),0 2px 6px rgba(0,0,0,.12)!important;
   padding: 1.5rem!important;
 }
 .content {
   border-bottom-width: 1px!important;
   border-bottom-style: solid;
   padding-bottom: 1rem!important;
   border-color: var(--surface-border)!important;
 }
 .text-p{
   margin-bottom: 1.2rem!important;
   font-size: 1.5rem!important;
   font-weight: 600!important;
   font-family: 'Roboto', sans-serif;
   color: var(--surface-800)!important;
   font-size: 30px;
   text-align: center;
 }
 .watch-img {
   width: 100px;
   height: 122px;
 }
 .text-h1 {
   font-size: 1.4rem!important;
   color: var(--surface-900)!important;
   font-family: 'Roboto', sans-serif;
   margin-bottom: 0.5rem!important;
   font-weight: 500!important;
   text-align: center;
 }
 .text-h2 {
   margin-bottom: 1rem;
   font-weight: 500!important;
   font-family: 'Roboto', sans-serif;
   color: var(--surface-600)!important;
   font-size: 1rem!important;
   text-align: center;
 }
 .img {
   display: flex;
   justify-content: center;
   padding: 20px;
 }

 .card {
   background: #fff;
   border-radius: 2px;
   display: inline-block;
   height: 300px;
   margin: 1rem;
   position: relative;
   width: 300px;
 }

 .card-2:hover {
   box-shadow: 0 6px 9px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
   transition: 0.4s all;
 }

 .p-card-header img {
   width: 340px !important;
   height: 350px;
 }

 .p-component {
   cursor: pointer;
   width: 379px !important;
   height: 551px !important;
 }

 .p-card-header {
   padding: 1rem;
 }

 .p-card-body {
   text-align: center;
 }

 .p-card .p-card-title {
   font-size: 1rem !important;
 }

 .p-card .p-card-content {
   padding: 0 !important;
 }

 .p-card .p-card-footer {
   marging-top: 1rem;
 }

 .p-rating .p-rating-icon.pi-star-fill {
   color: #fcb941 !important;
 }

 .p-rating:not(.p-disabled):not(.p-readonly) .p-rating-icon:hover {
   color: #fcb941 !important;
 }

 .p-rating .p-rating-icon:focus {
   outline: 0 none !important;
   outline-offset: 0 !important;
   box-shadow: 0 0 0 0.2rem #fcb941 !important;
 }

 .pi-ban:before {
   display: none !important;
 }
.p-rating .p-rating-icon.pi-star-fill {
  color: #6366F1;
}
.p-rating .p-rating-icon:first-child {
  margin-left: 0;
}
.p-rating .p-rating-icon {
  color: #495057;
  margin-left: 0.5rem;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  font-size: 1.143rem;
}
.pi-star-fill:before {
  content: "\e936";
}
.p-rating .p-rating-icon {
  color: #495057;
  margin-left: 0.5rem;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  font-size: 1.143rem;
}
.p-rating-icon {
  cursor: pointer;
}
.pi {
  font-family: primeicons;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.pi {
  font-size: 1rem;
}
</style>