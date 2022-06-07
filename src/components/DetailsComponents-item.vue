<template>
  <div class="container">
    <div class="img">
        <img class="img-watch" src="../assets/img/11168796-1.jpg">
    </div>
    <div class="ul">
      <ul>
        <li class="li-title">{{details.title}}</li>
        <li class="li-price">{{details.price}}</li>
        <li class="li-img">{{details.image}}</li>
        <li class="li-descr">{{details.description}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "DetailsComponents-item",
  data() {
    return {
      details:[],
      ayub: "",
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
  .img-watch{
    width: 400px;
    height: 500px;
  }
.li-img {
  width: 40%;
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
}
  li {
    list-style: none;
    margin: 18px;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
  }
  .li-descr {
    width: 484px;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.7;
  }
  .li-title{
    color: #ff9900;
    font-size: 30px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
  }
  .li-title:hover,
  .li-price:hover{
    color: aqua;
    transition: 0.2s ease-in-out;
  }
  .li-price {
    color: #ff9900;
    font-size: 25px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
  }
  .ul {
    display: flex;
    align-items: center;
  }
  .container {
    display: flex;
    width: 60%;
    margin: 0 auto;
  }
</style>