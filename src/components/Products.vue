<template>
  <div>
    <router-link :to="'/product/' + i.id" v-for="i in info" v-bind:key="i.id" >
      <Card class="card card-2" @click="ToDetailComponents">
        <template #header>
          <img alt="user header" src="../assets/product-1-2.jpg">
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
</template>

<script>
    import axios from "axios";

    export default {
        name: "Products",
        // props: {
        //     info: {
        //         type: Array
        //     }
        // },
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

<style>
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
</style>