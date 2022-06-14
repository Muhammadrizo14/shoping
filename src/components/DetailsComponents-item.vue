<template>
  <div class="page">
    <div class="wrapper">
    <div class="img" @mouseover="this.btnHover = true" @mouseout="this.btnHover = false">
      <div class="position">
        <div v-if="color.red == true">
          <img src="../assets/img/remen_dlya_chasov_apple_44mm_pomegranate_sport_band_s_m_m_l_645-1000x768.jpg" alt="Image" class="img-watch"/>
        </div>
        <div v-if="color.blue == true">
          <img src="../assets/img/2cda318e3eb26555a1eabb1fb0ea0a12--ice-watch-digital-watch.jpg" alt="Image" class="img-watch"/>
        </div>
        <div v-if="color.darkblue == true">
          <img src="../assets/img/blue.jpg" alt="Image" class="img-watch"/>
        </div>
        <button class="btn-hover"  @click="modalFirst = !modalFirst">View Details</button>
      </div>
      <div class="img-text">
        <h1 class="text">Hover Image</h1>
        <p class="text-p">$90.00</p>
      </div>
      <modals
          title="First modal"
          v-show="modalFirst"
          @close="modalFirst = false">
        <div>
          <p> Text Text Text Text Text Text</p>
        </div>
      </modals>
      </div>
<!--    <div class="ul">-->
<!--      <ul>-->
<!--        <li class="li-title">{{details.title}}</li>-->
<!--        <li class="li-price">{{details.price}}</li>-->
<!--        <li class="li-img">{{details.image}}</li>-->
<!--        <li class="li-descr">{{details.description}}</li>-->
<!--      </ul>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import axios from "axios"
import modals from '@/components/Modal'
export default {
  name: "DetailsComponents-item",
  data() {
    return {
      details: [],
      ayub: "",
      modalFirst: false,
      btnHover: false,
      modalSecond: {
        show: false,
        name: '',
        email: ''
      },
      color: this.$store.state.color
    }
  },
  components: {
    modals
  },
  mounted() {
    const a = this.$route.params['id']
    console.log(a)
    this.ayub = a

    axios.get(`http://localhost:3000/products/${a}`).then(res => {
      const data = res.data;
      this.details = data
      console.log(this.details);
      // const post = data.filter((obj, a)=>{
      //   return a == obj.id;
      // })

      // this.data = post
    })
  },
  methods: {
    submitSecondForm () {
      axios
          // .get(`https://site.com/API/read.php`)
          .post('https://site.com/mail.php', {
            name: this.modalSecond.name,
            email: this.modalSecond.email
          })
      //RESET
      this.modalSecond.name = ''
      this.modalSecond.email = ''
      this.modalSecond.show = false
    }
  }
}

</script>




<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
  .img-watch{
    width: 279px;
    height: 353px;
    /*box-shadow: 0 4px 10px rgba(0,0,0,.03),0 0 2px rgba(0,0,0,.06),0 2px 6px rgba(0,0,0,.12)!important;*/
  }

.btn-hover {
  margin: 0 auto;
  padding: 15px 55px 15px 55px;
  border: none;
  border-radius: 5px;
  color: #fff;
  transition: 0.7s all;
  font-size: 16px;
  position: relative;
  bottom: 34px;
  left: 43px;
  background: #fff;
}
.btn-hover:hover {
background-color: rgba(0,0,0,.5);
  cursor: pointer;
}


.li-img {
  width: 40%;
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
}
  li {
    list-style: none;
    margin: 18px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
.text-p {
  font-size: 1.25rem!important;
  font-weight: 500!important;
  font-family: 'Roboto', sans-serif;
  color: #212121;
}
.img-text {
  display: flex;
  width: 99%;
  justify-content: space-between;
  align-items: center;
  position: relative;
  bottom: 16px;
}

.li-descr {
    width: 484px;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.7;
  }
.text {
  font-size: 1.25rem!important;
  font-weight: 500!important;
  font-family: 'Roboto', sans-serif;
  color: #212121;
}
.txt {
  text-align: center;
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
  .wrapper {
    display: flex;
    width: 15%;
    margin: 0 auto;
    align-items: center;
    height: 100vh;
  }
  .img {
    height: 493px;
    background: #fff;
    padding: 1.5rem!important;
    border-radius: 6px;
    -webkit-box-shadow: 0 4px 10px rgba(0,0,0,.03),0 0 2px rgba(0,0,0,.06),0 2px 6px rgba(0,0,0,.12)!important;
    box-shadow: 0 4px 10px rgba(0,0,0,.03),0 0 2px rgba(0,0,0,.06),0 2px 6px rgba(0,0,0,.12)!important;

  }

  .page {
    width: 100%;
    background-color: #fff;
    height: 100%;
  }

</style>