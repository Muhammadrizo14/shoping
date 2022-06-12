<template>
  <div class="page_1">
    <router-link class="link" :to="'/product/' + i.id" v-for="i in info" :key="i.id">
        <div class="wrapper-content container-mw">
          <div class="content">
            <div class="img">
              <img class="watch-img" alt="watch" src="../assets/img/11168796-1.jpg">
            </div>
            <div class="text">
              <h1 class="text-h1">{{i.title}}</h1>
              <h2 class="text-h2">{{i.title_2}}</h2>
              <p class="text-p">{{i.price}}</p>
            </div>
            <div class="p-rating p-readonly icons">
              <span class="p-rating-icon pi pi-star-fill"></span>
              <span class="p-rating-icon pi pi-star-fill"></span>
              <span class="p-rating-icon pi pi-star-fill"></span>
              <span class="p-rating-icon pi pi-star"></span>
              <span class="p-rating-icon pi pi-star"></span>
            </div>
          </div>
          <div class="buy-now">
            <button class="p-button p-component p-button-text">
              <span class="pi pi-shopping-cart p-button-icon p-button-icon-left"></span>
              <span class="p-button-label">Buy Now</span>
              <span class="p-ink"></span>
            </button>
            <button class="p-button p-component p-button-icon-only p-button-text p-button-secondary" >
              <span class="pi pi-heart p-button-icon"></span>
              <span class="p-button-label">&nbsp;</span>
              <span class="p-ink"></span>
            </button>
          </div>
        </div>
    </router-link>
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
.link {
  text-decoration: none;
}
 .container {
   width: 100%;
   padding: 30px;
   display: flex;
 }
 .container-mw {
   max-width: 85%;
   margin: 0 auto;
 }
 .page_1 {
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   width: 86%;
   margin: 0 auto;
 }
.p-button.p-button-secondary.p-button-text, .p-buttonset.p-button-secondary > .p-button.p-button-text, .p-splitbutton.p-button-secondary > .p-button.p-button-text {
  background-color: transparent;
  color: #64748B;
  border-color: transparent;
}
.p-button.p-button-secondary, .p-buttonset.p-button-secondary > .p-button, .p-splitbutton.p-button-secondary > .p-button {
  color: #ffffff;
  background: #64748B;
  border: 1px solid #64748B;
}
.p-button.p-button-icon-only {
  width: 3rem;
  padding: 1.8rem 0px;
}
.p-button.p-button-text {
  background-color: transparent;
  color: #6366F1;
  border-color: transparent;
}
.buy-now {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px;
}
.p-button-icon-only {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.p-component, .p-component * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.p-button.p-button-secondary.p-button-text, .p-buttonset.p-button-secondary > .p-button.p-button-text, .p-splitbutton.p-button-secondary > .p-button.p-button-text {
  background-color: transparent;
  color: #64748B;
  border-color: transparent;
}
.p-button.p-button-secondary, .p-buttonset.p-button-secondary > .p-button, .p-splitbutton.p-button-secondary > .p-button {
  color: #ffffff;
  background: #64748B;
  border: 1px solid #64748B;
}
.p-button.p-button-text {
  background-color: transparent;
  color: #6366F1;
  border-color: transparent;
}

.p-button-icon-only .p-button-label {
  visibility: hidden;
  width: 0;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
}
.p-button-label {
  -webkit-transition: all .2s;
  transition: all .2s;
}
.p-button-label {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
}
.p-button-label {
  font-weight: 700;
}
.p-component, .p-component * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.p-ink {
  display: block;
  position: absolute;
  background: hsla(0,0%,100%,.5);
  border-radius: 100%;
  -webkit-transform: scale(0);
  transform: scale(0);
  pointer-events: none;
}
.p-component, .p-component * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.p-button .p-button-icon-left {
  margin-right: 0.5rem;
}
.p-button {
  color: #ffffff;
  background: #6366F1;
  border: 1px solid #6366F1;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  border-radius: 6px;
}

.p-component, .p-component * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.p-button-label {
  -webkit-transition: all .2s;
  transition: all .2s;
}
.p-button.p-button-text:enabled:hover {
  background: rgba(99, 102, 241, 0.04);
  color: #6366F1;
  border-color: transparent;
}
.p-button:enabled:hover {
  background: #4F46E5;
  color: #ffffff;
  border-color: #4F46E5;
}
.p-button.p-button-text {
  background-color: transparent;
  color: #6366F1;
  border-color: transparent;
}
.p-button-label {
  font-weight: 700;
}
.p-component, .p-component * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.p-button-label {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
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
.p-component, .p-component * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.pi {
  font-size: 1rem;
}
 .icons{
   display: flex;
   justify-content: center;
 }
 .wrapper-content {
   width: 370px;
   height: 425px;
   background-color: #fff;
   -webkit-box-shadow: 0 4px 10px rgba(0,0,0,.03),0 0 2px rgba(0,0,0,.06),0 2px 6px rgba(0,0,0,.12)!important;
   padding: 1.5rem!important;
   margin: 20px;

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
 }

 .card-2:hover {
   box-shadow: 0 6px 9px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
   transition: 0.4s all;
 }
.p-button.p-button-text {
  background-color: transparent;
  color: #6366F1;
  border-color: transparent;
}

.p-button {
  color: #ffffff;
  background: #6366F1;
  border: 1px solid #6366F1;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  border-radius: 6px;
}
.p-component {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 1rem;
  font-weight: normal;
}
 .p-card-header img {
   width: 340px !important;
   height: 350px;
 }

.p-component {
  cursor: pointer;
  height: 47px !important;
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