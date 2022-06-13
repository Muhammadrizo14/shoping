<template>
  <transition name="modal">
    <div class="modal__wrapper" @click="$emit('close')">
      <div class="modal-content p-dialog" style=" padding: 2rem 2rem 1rem;" @click.stop="">
        <div class="modal-header">
          <div class="grid relative">
            <div class="col-12 lg:col-6 text-center content-t">
              <div v-if="color.red == true">
                <img src="../assets/img/remen_dlya_chasov_apple_44mm_pomegranate_sport_band_s_m_m_l_645-1000x768.jpg" class="position-btn">
              </div>
              <div v-if="color.blue == true">
                <img src="../assets/img/R27114902_1.jpg" class="w-8rem sm:w-15rem lg:w-20rem">
              </div>
              <div v-if="color.darkblue == true">
                <img src="../assets/img/blue.jpg" class="position-btn2">
              </div>

            </div>
            <div class="col-12 lg:col-6 py-0 lg:pl-5">
              <div class="flex justify-content-end">
                <button class="p-button p-component p-button-icon-only absolute lg:static p-button-text p-button-plain p-button-rounded" type="button" style="right: 0rem; top: 0rem;" @click="$emit('close')">
                  <!----><span class="pi pi-times pi-2xl p-button-icon"></span><span class="p-button-label">&nbsp;</span>
                  <!----><span class="p-ink"></span></button></div><div class="flex align-items-center justify-content-between mb-3">
              <span class="text-xl font-medium text-900">Product Title</span></div><div class="flex align-items-center justify-content-between mb-3">
              <div class="text-xl text-900 lt">$123</div>
              <div class="flex align-items-center"><span class="mr-3 flex">
                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                <i class="pi pi-star-fill text-yellow-500"></i></span>
              </div>
            </div>
              <p class="p-0 mt-0 mb-3 line-height-3 text-700"> Dolor purus non enim praesent. At quis risus sed vulputate odio ut. </p>
              <div class="font-bold text-900 mb-3">Color</div>
              <div class="flex align-items-center mb-5">
                <Button @click="color.blue = true, color.red = false, color.darkblue = false" class=" btn_color1 transition-duration-300 border-circle border-circle border-2 mr-3 back"/>
                <Button  @click="color.red = true, color.blue = false, color.darkblue = false" class=" btn_color2 p-button-rounded p-button-help border-circle p-button-outlined border-2 mr-3 back" />
                <Button  @click="color.darkblue = true,  color.red = false, color.blue = false" class=" btn_color3 p-button-rounded p-button-info border-circle p-button-outlined back border-2" />
              </div>
              <div class="mb-3 flex align-items-center justify-content-between">
                <span class="font-bold text-900">Size</span>
                <a tabindex="0" class="cursor-pointer text-600 text-sm flex align-items-center">Size Guide <i class="ml-1 pi pi-angle-right"></i></a>
              </div>
              <div class="flex align-items-center mb-3 text-base">
                <Button label="S" class="fontsize1 btn5 h-2rem w-2rem border-1 border-300  inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-2 cursor-pointer hover:surface-100 transition-duration-150 transition-colors border-blue-500 border-2 border-300 background" style="color: black" />
                <Button label="M" class="fontsize1 btn5 h-2rem w-2rem border-1 border-300  inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-2 cursor-pointer hover:surface-100 transition-duration-150 transition-colors border-blue-500 border-2 border-300 background" style="color: black" />
                <Button label="L" class="fontsize1 btn5 h-2rem w-2rem border-1 border-300  inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-2 cursor-pointer hover:surface-100 transition-duration-150 transition-colors border-blue-500 border-2 border-300 background" style="color: black" />
                <Button label="XL" class="fontsize1 btn5 h-2rem w-2rem border-1 border-300  inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-2 cursor-pointer hover:surface-100 transition-duration-150 transition-colors border-blue-500 border-2 border-300 background" style="color: black" />
              </div>
              <button class="p-button p-component w-full" type="button">
                <!----><span class="pi pi-shopping-cart p-button-icon p-button-icon-left"></span>
                <span class="p-button-label ">Add to Cart</span><!----><span class="p-ink"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      color: this.$store.state.color,
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
// Animation
//.p-button[data-v-701ac82d]:enabled {
//  background: #00BCD4 !important;
//  color: #ffffff !important;
//  border-color: #00BCD4 !important;
//}
.blue1 {
  background-color: var(--cyan-500)!important;
}
.pink {
  background-color: var(--purple-500)!important;
}
.back {
  color: #4F46E5;
}
*
.fontsize1 {
  font-size: 1rem!important;
}
.w-2rem {
  width: 2rem!important;
}
.changeImage {
  background-image: url("../assets/img/app.watch.jpg")!important;
  width: 20rem!important;
  background-position: center!important;
  background-size: cover!important;
  background-repeat: no-repeat!important;
  height: 25rem!important;
}
.border-circle {
  border-radius: 50%!important;
}
.blue {
  background-color: var(--indigo-500)!important;
}
.btn_color1 {
  background-color: var(--cyan-500)!important;
}
.btn_color2 {
  background-color: var(--purple-500)!important;
}
.btn_color3 {
  background-color: var(--indigo-500)!important;
}
.color1 {
  color: #4F46E5!important;
}

.transition-duration-300 {
  -webkit-transition-duration: .3s!important;
  transition-duration: .3s!important;
}
.transition-all {
  -webkit-transition-property: all!important;
  transition-property: all!important;
}
.p-button.p-button-icon-only[data-v-701ac82d] {
  width: 2.5rem;
  padding: 0.75rem 0;
}
.background {
  background-color: #fff!important;
}
.p-button[data-v-701ac82d][data-v-701ac82d] {
  color: #ffffff;
  //background: #6366F1;
  border: 1px solid #6366F1;
  padding: 0.75rem 12px;
  font-size: 1px;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  //border-radius: 11px;
}

:root {
  --surface-a: #ffffff;
  --yellow-500: #eab308;
  --surface-b: #f8f9fa;
  --surface-c: #e9ecef;
  --surface-d: #dee2e6;
  --surface-e: #ffffff;
  --surface-f: #ffffff;
  --text-color: #495057;
  --text-color-secondary: #6c757d;
  --primary-color: #6366F1;
  --primary-color-text: #ffffff;
  --font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  --surface-0: #ffffff;
  --surface-50: #FAFAFA;
  --surface-100: #F5F5F5;
  --surface-200: #EEEEEE;
  --surface-300: #E0E0E0;
  --surface-400: #BDBDBD;
  --surface-500: #9E9E9E;
  --surface-600: #757575;
  --surface-700: #616161;
  --surface-800: #424242;
  --surface-900: #212121;
  --cyan-500: #06b6d4;
  --gray-50: #FAFAFA;
  --gray-100: #F5F5F5;
  --gray-200: #EEEEEE;
  --gray-300: #E0E0E0;
  --gray-400: #BDBDBD;
  --gray-500: #9E9E9E;
  --gray-600: #757575;
  --gray-700: #616161;
  --gray-800: #424242;
  --gray-900: #212121;
}
:root {
  --surface-a: #ffffff;
  --surface-b: #f8f9fa;
  --surface-c: #e9ecef;
  --surface-d: #dee2e6;
  --surface-e: #ffffff;
  --surface-f: #ffffff;
  --text-color: #495057;
  --text-color-secondary: #6c757d;
  --primary-color: #6366F1;
  --primary-color-text: #ffffff;
  --font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  --surface-0: #ffffff;
  --surface-50: #FAFAFA;
  --surface-100: #F5F5F5;
  --surface-200: #EEEEEE;
  --surface-300: #E0E0E0;
  --surface-400: #BDBDBD;
  --surface-500: #9E9E9E;
  --surface-600: #757575;
  --surface-700: #616161;
  --surface-800: #424242;
  --surface-900: #212121;
  --gray-50: #FAFAFA;
  --gray-100: #F5F5F5;
  --gray-200: #EEEEEE;
  --gray-300: #E0E0E0;
  --gray-400: #BDBDBD;
  --gray-500: #9E9E9E;
  --gray-600: #757575;
  --gray-700: #616161;
  --gray-800: #424242;
  --gray-900: #212121;
  --content-padding: 1.25rem;
  --inline-spacing: 0.5rem;
  --border-radius: 6px;
  --surface-ground: #eff3f8;
  --surface-section: #ffffff;
  --surface-card: #ffffff;
  --surface-overlay: #ffffff;
  --surface-border: #dfe7ef;
  --surface-hover: #f6f9fc;
  --focus-ring: 0 0 0 0.2rem #C7D2FE;
  --maskbg: rgba(0, 0, 0, 0.4);
}
:root {
  --blue-50: #f5f9ff;
  --blue-100: #d0e1fd;
  --blue-200: #abc9fb;
  --blue-300: #85b2f9;
  --blue-400: #609af8;
  --blue-500: #3b82f6;
  --blue-600: #326fd1;
  --blue-700: #295bac;
  --blue-800: #204887;
  --blue-900: #183462;
  --green-50: #f4fcf7;
  --green-100: #caf1d8;
  --green-200: #a0e6ba;
  --green-300: #76db9b;
  --green-400: #4cd07d;
  --green-500: #22c55e;
  --green-600: #1da750;
  --green-700: #188a42;
  --green-800: #136c34;
  --green-900: #0e4f26;
  --yellow-50: #fefbf3;
  --yellow-100: #faedc4;
  --yellow-200: #f6de95;
  --yellow-300: #f2d066;
  --yellow-400: #eec137;
  --yellow-500: #eab308;
  --yellow-600: #c79807;
  --yellow-700: #a47d06;
  --yellow-800: #816204;
  --yellow-900: #5e4803;
  --cyan-50: #f3fbfd;
  --cyan-100: #c3edf5;
  --cyan-200: #94e0ed;
  --cyan-300: #65d2e4;
  --cyan-400: #35c4dc;
  --cyan-500: #06b6d4;
  --cyan-600: #059bb4;
  --cyan-700: #047f94;
  --cyan-800: #036475;
  --cyan-900: #024955;
  --pink-50: #fef6fa;
  --pink-100: #fad3e7;
  --pink-200: #f7b0d3;
  --pink-300: #f38ec0;
  --pink-400: #f06bac;
  --pink-500: #ec4899;
  --pink-600: #c93d82;
  --pink-700: #a5326b;
  --pink-800: #822854;
  --pink-900: #5e1d3d;
}
.modal-enter, .modal-leave-active{
  opacity: 0
}

.modal-enter .modal-content,
.modal-leave-active .modal-content {
  transform: scale(1.2);
}
.grid>.col, .grid>[class*=col] {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.lt {
  letter-spacing: 0.5;
}
.p-component, .p-component * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.transition-duration-150 {
  -webkit-transition-duration: .15s!important;
  transition-duration: .15s!important;
}
.transition-colors {
  -webkit-transition-property: background-color,border-color,color!important;
  transition-property: background-color,border-color,color!important;
}

.cursor-pointer {
  cursor: pointer!important;
}
.h-2rem {
  height: 2rem!important;
}
.w-2rem {
  width: 2rem!important;
}
.border-round {
  border-radius: var(--border-radius)!important;
}
.border-1 {
  border-width: 1px!important;
  border-style: solid;
}
.mr-2 {
  margin-right: 0.5rem!important;
}
.flex-shrink-0 {
  -ms-flex-negative: 0!important;
  flex-shrink: 0!important;
}
.align-items-center {
  -webkit-box-align: center!important;
  -ms-flex-align: center!important;
  align-items: center!important;
}
.justify-content-center {
  -webkit-box-pack: center!important;
  -ms-flex-pack: center!important;
  justify-content: center!important;
}
.inline-flex {
  display: -webkit-inline-box!important;
  display: -ms-inline-flexbox!important;
  display: inline-flex!important;
}
.border-300 {
  border-color: var(--surface-300)!important;
}
.text-900 {
  color: var(--surface-900)!important;
}
.justify-content-center {
  -webkit-box-pack: center!important;
  -ms-flex-pack: center!important;
  justify-content: center!important;
}
.p-button.p-button-text.p-button-plain:enabled:hover {
  background: #e9ecef;
  color: #6c757d;
}
.p-button[data-v-701ac82d]:enabled:hover {
  background: #4F46E5;
  color: #ffffff;
  border-color: var(--cyan-500);
}
.w-full {
  width: 100%!important;
}
.border-2 {
  border-width: 2px!important;
  border-style: solid!important;
}
.grid {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -0.5rem;
  margin-left: -0.5rem;
  margin-top: -0.5rem;
}
.relative {
  position: relative!important;
}
component * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.py-0 {
  padding-top: 0!important;
  padding-bottom: 0!important;
}
.col-12 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  padding: 0.5rem;
  width: 100%;
}
.p-button.p-button-text:enabled:hover {
  background: rgba(99, 102, 241, 0.04);
  color: #6366F1;
  border-color: transparent;
}
.p-button.p-button-icon-only.p-button-rounded {
  border-radius: 50%;
  height: 2.5rem!important;
}
.p-button.p-button-text.p-button-plain {
  color: #6c757d;
}

.relative {
  position: relative!important;
}
.w-8rem {
  width: 16rem !important;
}
.grid {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -0.5rem;
  margin-left: -0.5rem;
  margin-top: -0.5rem;
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
.w {
  width: 2rem!important;
}
.pi {
  font-size: 1rem;
}
.p-button.p-button-text.p-button-plain {
  color: #6c757d;
}
.p-button.p-button-text {
  background-color: transparent;
  color: #6366F1;
  border-color: transparent;
}
.p-button:enabled:hover {
  background: #4F46E5;
  color: #ffffff;
  border-color: #4F46E5;
}
.p-button.p-button-icon-only {
  width: 3rem;
  padding: 0.75rem 0;
}
.p-button-icon-only {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.p-button {
  margin: 0;
  display: -ms-inline-flexbox;
  display: inline-flex;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  vertical-align: bottom;
  text-align: center;
  overflow: hidden;
  position: relative;
}
.p-component, .p-component * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.p-button {
  color: #ffffff;
  background: #6366F1;
  padding: 0.75rem 1.25rem;
  border: 0 solid !important;
  font-size: 1rem;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  border-radius: 11px;
}
.p-component {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 1rem;
  font-weight: normal;
}

.modal__wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  transition: opacity .2s ease;
  right: 0;
  z-index: 998;
  background-color: rgba(00,00,00,.48);
}

.modal-content {
  position: relative;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  transition: all .2s ease;
  border-radius: 8px;
  z-index: 999;
  overflow: hidden;
  min-width: 700px;
}

span {
  font-size: 16px;
  cursor: pointer;
}
.button-close {
  cursor: pointer;
}
.modal-body {
  text-align: center;
}
.grid>.col, .grid>[class*=col] {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.py-0 {
  padding-top: 0!important;
  padding-bottom: 0!important;
}
.col-12 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  padding: 0.5rem;
  width: 100%;
}
.justify-content-end {
  -webkit-box-pack: end!important;
  -ms-flex-pack: end!important;
  justify-content: flex-end!important;
}
.flex {
  display: -webkit-box!important;
  display: -ms-flexbox!important;
  display: flex!important;
}
.p-button.p-button-icon-only.p-button-rounded {
  border-radius: 50%;
  height: 3rem;
}
.position-btn2 {
  width: 19rem !important;
  position: relative;
  display: flex;
  align-items: center;
  height: 34vh;
  right: 20px;
  top: 21px;
}
.p-button.p-button-text.p-button-plain {
  color: #6c757d;
}
.p-button.p-button-icon-only {
  width: 3rem;
  padding: 0.75rem 0;
}
.p-button.p-button-rounded {
  border-radius: 2rem;
}
.p-button.p-button-text {
  background-color: transparent;
  color: #6366F1;
  border-color: transparent;
}
.p-button-icon-only {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.p-button {
  margin: 0;
  display: -ms-inline-flexbox;
  display: inline-flex;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  vertical-align: bottom;
  text-align: center;
  overflow: hidden;
  position: relative;
}
.p-component, .p-component * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.p-button {
  color: #ffffff;
  background: #6366F1;
  border: 1px solid #6366F1;
  padding: 0.75rem 12px;
  font-size: 1px;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  border-radius: 6px;
}
.p-component {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 1rem;
  font-weight: normal;
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
  font-family: 'Robot', sans-serif;
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
.mb-3 {
  margin-bottom: 1rem!important;
}
.align-items-center {
  -webkit-box-align: center!important;
  -ms-flex-align: center!important;
  align-items: center!important;
}
.justify-content-between {
  -webkit-box-pack: justify!important;
  -ms-flex-pack: justify!important;
  justify-content: space-between!important;
}
.text-xl {
  font-size: 1.25rem!important;
  font-family: 'Roboto', sans-serif;
}
.font-medium {
  font-weight: 500!important;
}
.text-900 {
  color: var(--surface-900)!important;
}
.p-dialog .p-dialog-content {
  background: #ffffff;
  color: #495057;
  padding: 0 1.5rem 2rem 1.5rem;
}
.p-dialog {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  pointer-events: auto;
  max-height: 90%;
  -webkit-transform: scale(1);
  transform: scale(1);
}
.text-xl {
  font-size: 1.25rem!important;
}
.text-900 {
  color: var(--surface-900)!important;
}
.mr-3 {
  margin-right: 1rem!important;
  color: var(--yellow-500)!important;
}
.mt-0 {
  margin-top: 0!important;
}
.line-height-3 {
  line-height: 1.5!important;
}
.p-0 {
  padding: 0!important;
}
.text-700 {
  color: var(--surface-700)!important;
  font-family: 'Roboto', sans-serif;
}
.font-bold {
  font-weight: 700!important;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
}
.text-900 {
  color: var(--surface-900)!important;
}
.mb-5 {
  margin-bottom: 2rem!important;
}
.transition-duration-300 {
  -webkit-transition-duration: .3s!important;
  transition-duration: .3s!important;
}
.transition-all {
  -webkit-transition-property: all!important;
  transition-property: all!important;
}
.cursor-pointer {
  cursor: pointer!important;
}
.h-2rem[data-v-701ac82d][data-v-701ac82d] {
  height: 2rem !important;
}
.w-2rem {
  width: 2rem!important;
}
.border-circle {
  border-radius: 50%!important;
}

.mr-3 {
  margin-right: 1rem!important;
}
.flex-shrink-0 {
  -ms-flex-negative: 0!important;
  flex-shrink: 0!important;
}
.border-white, .hover\:border-white:hover {
  border-color: #fff!important;
}
.bg-cyan-500 {
  background-color: var(--cyan-500)!important;
}
.justify-content-between {
  -webkit-box-pack: justify!important;
  -ms-flex-pack: justify!important;
  justify-content: space-between!important;
}
.text-900 {
  color: var(--surface-900)!important;
}
.text-sm {
  font-size: .875rem!important;
}
.text-600 {
  color: var(--surface-600)!important;
  font-family: 'Roboto', sans-serif;
}
.border-1 {
  border-width: 1px!important;
  border-style: solid;
}
.border-round {
  border-radius: var(--border-radius)!important;
}
.mr-2 {
  margin-right: 0.5rem!important;
}
.border-300 {
  border-color: var(--surface-300)!important;
}
.text-900 {
  color: var(--surface-900)!important;
}
.w-2rem {
  width: 2rem!important;
}
.mr-2 {
  margin-right: 0.5rem!important;
}
.border-blue-500 {
  border-color: var(--blue-500)!important;
}
.text-blue-500 {
  color: black;
}
.border-300 {
  border-color: var(--surface-300)!important;
}
.transition-colors {
  -webkit-transition-property: background-color,border-color,color!important;
  transition-property: background-color,border-color,color!important;
}
.transition-duration-150 {
  -webkit-transition-duration: .15s!important;
  transition-duration: .15s!important;
}
.modal-enter, .modal-leave-active{
  opacity: 0
}

.modal-enter .modal-content,
.modal-leave-active .modal-content {
  transform: scale(1.2);
}

.modal__wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  transition: opacity .2s ease;
  right: 0;
  z-index: 998;
  background-color: rgba(00,00,00,.48);
}
.p-dialog {
  border-radius: 6px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
  border: 0 none;
}

.modal-content {
  position: relative;
  max-width: 600px;
  padding: 20px 18px;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  transition: all .2s ease;
  border-radius: 0;
  z-index: 999;
  overflow: hidden;
  min-width: 700px;
}
.modal-header {
  display: flex;
  align-self: center;
  justify-content: space-between;
  padding-bottom: 20px;
  .button-close {
    cursor: pointer;
  }
}
.modal-body {
  text-align: center;
}
.p-button {
  margin: 0;
  display: -ms-inline-flexbox;
  display: inline-flex;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  vertical-align: bottom;
  text-align: center;
  overflow: hidden;
  position: relative;
}
.p-component, .p-component * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.p-button:enabled:hover {
  background: #4F46E5;
  color: #ffffff;
  border-color: #4F46E5;
}
@media screen and (min-width: 992px){
.lg\:col-6 {
  width: 50%;
}
}
@media screen and (min-width: 992px) {
  .lg\:col-5, .lg\:col-6 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    padding: 1.5rem;
  }
}
.mb-5 {
  margin-bottom: 2rem!important;
}
.p-dialog-mask.p-component-overlay {
  pointer-events: auto;
}
.p-component {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 1rem;
  font-weight: normal;
}
.p-component, .p-component * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.align-items-center {
  -webkit-box-align: center!important;
  -ms-flex-align: center!important;
  align-items: center!important;
}
.mb-5 {
  margin-bottom: 2rem!important;
}
.border-white, .hover\:border-white:hover {
  border-color: #fff!important;
}
.bg-cyan-500 {
  background-color: var(--cyan-500)!important;
}
.p-component, .p-component * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.flex {
  display: -webkit-box!important;
  display: -ms-flexbox!important;
  display: flex!important;
}
.bg-cyan-500 {
  background-color: var(--cyan-500)!important;
}
.transition-all {
  -webkit-transition-property: all!important;
  transition-property: all!important;
}
.transition-duration-300 {
  -webkit-transition-duration: .3s!important;
  transition-duration: .3s!important;
}
.transition-all {
  -webkit-transition-property: all!important;
  transition-property: all!important;
}
.border-white, .hover\:border-white:hover {
  border-color: #fff!important;
}
.transition-duration-300 {
  -webkit-transition-duration: .3s!important;
  transition-duration: .3s!important;
}
.p-component, .p-component * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.mr-3 {
  margin-right: 1rem!important;
}
.border-white, .hover\:border-white:hover {
  border-color: #fff!important;
}
.p-dialog .p-dialog-content {
  background: #ffffff;
  color: #495057;
  padding: 0 1.5rem 2rem 1.5rem;
}
.mr-1 {
  margin-right: 0.25rem!important;
}
.bg-indigo-500 {
  background-color: var(--indigo-500)!important;
}
.p-dialog-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  pointer-events: none;
}
.p-button {
  margin: 0;
  display: -ms-inline-flexbox;
  display: inline-flex;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  vertical-align: bottom;
  text-align: center;
  overflow: hidden;
  position: relative;
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
.transition-duration-300 {
  -webkit-transition-duration: .3s!important;
  transition-duration: .3s!important;
}
.transition-all {
  -webkit-transition-property: all!important;
  transition-property: all!important;
}
.bg-purple-500 {
  background-color: var(--purple-500)!important;
}
.border-white, .hover\:border-white:hover {
  border-color: #fff!important;
}
.text-base {
  font-size: 1rem!important;
}
.transition-duration-150 {
  -webkit-transition-duration: .15s!important;
  transition-duration: .15s!important;
}
.transition-colors {
  -webkit-transition-property: background-color,border-color,color!important;
  transition-property: background-color,border-color,color!important;
}
.border-300 {
  border-color: var(--surface-300)!important;
}
.text-900 {
  color: var(--surface-900)!important;
}
.inline-flex {
  display: -ms-inline-flexbox!important;
  display: inline-flex!important;
}
.mr-2 {
  margin-right: 0.5rem!important;
}
.w-2rem {
  width: 2rem!important;
}
.h-2rem {
  height: 2rem!important;
}
.mr-2 {
  margin-right: 0.5rem!important;
}
.active\:surface-100:active, .focus\:surface-100:focus, .hover\:surface-100:hover {
  background-color: var(--surface-100)!important;
}
.w-8rem[data-v-701ac82d][data-v-701ac82d] {
  width: 17rem !important;
}

.position-btn {
  width: 21rem !important;
  position: relative;
  right: 52px;
  top: 41px;
}

.p-component, .p-component * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.transition-duration-150 {
  -webkit-transition-duration: .15s!important;
  transition-duration: .15s!important;
}
.transition-colors {
  -webkit-transition-property: background-color,border-color,color!important;
  transition-property: background-color,border-color,color!important;
}
.border-1 {
  border-width: 1px!important;
  border-style: solid;
}
.flex-shrink-0 {
  -ms-flex-negative: 0 !important;

  .w-full {
    width: 100% !important;
  }

  .p-button {
    color: #ffffff;
    background: #6366F1;
    border: 1px solid #6366F1;
    padding: 0.75rem 1.25rem;
    font-size: 1rem;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  }

  .p-component {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 1rem;
    font-weight: normal;
  }

  .p-button .p-button-icon-left {
    margin-right: 0.5rem;
  }

  .p-component, .p-component * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .p-button[data-v-701ac82d][data-v-701ac82d][data-v-701ac82d] {
    color: #ffffff;
    //background: #6366F1;
    border: 1px solid #6366F1;
    padding: 0.75rem 12px;
    font-size: 1px;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    /* border-radius: 11px; */
  }
  .p-button[data-v-701ac82d][data-v-701ac82d][data-v-701ac82d] {
    color: #ffffff;
    //background: #6366F1;
    border: 1px solid #6366F1;
    padding: 0.75rem 12px;
    font-size: 1px;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    /* border-radius: 11px; */
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

  .grid {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -0.5rem;
    margin-left: -0.5rem;
    margin-top: -0.5rem;
  }
  .border-white[data-v-701ac82d], .hover\:border-white[data-v-701ac82d]:hover {
    border-color: #fff !important;
  }
  .p-component, .p-component * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .transition-duration-300 {
    -webkit-transition-duration: .3s!important;
    transition-duration: .3s!important;
  }
  .border-circle {
    border-radius: 50%!important;
  }
  .border-2 {
    border-width: 2px!important;
    border-style: solid;
  }
  .mr-3 {
    margin-right: 1rem!important;
  }
}
</style>
