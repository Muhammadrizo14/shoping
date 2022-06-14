<template>
  <div class="wrapper-content surface-section px-4 py-8 md:px-6 lg:px-8">
    <section>
      <div class="container">
        <div class="text-center" style="background: radial-gradient(50% 109138% at 50% 50%, rgba(233, 30, 99, 0.1) 0%, rgba(254, 244, 247, 0) 100%);">
          <span class="bg-white text-pink-500 font-bold text-2xl inline-block px-3">404</span>
        </div>
        <h1 class="mt-6 mb-5 font-bold text-6xl text-900 text-center">PAGE NOT FOUND!</h1>
        <p class="text-700 text-3xl mt-0 mb-6 text-center">Sorry, we couldn't find the page.</p>
        <div class="text-align">
          <Button typeof="button" class="p-button p-component p-button-text mr-2">
            <span class="pi pi-arrow-left p-button-icon p-button-icon-left"></span>
            <span class="p-button-label"><router-link class="link" :to="{name: 'Home'}">Go Back</router-link></span>
            <span class="p-ink"></span>
          </Button>
          <Button class="p-button p-component" typeof="button">
             <span class="pi pi-home p-button-icon p-button-icon-left"></span>
             <span class="p-button-label"><router-link class="link-2" :to="{name: 'Home'}">Go to Dashboard</router-link></span>
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

* {
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.p-button .p-button-icon-left {
  margin-right: 0.5rem;
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
  font-weight: 700!important;
}
.p-button-label {
  -webkit-transition: all .2s;
  transition: all .2s;
}
.link-2 {
  color: #ffff;
  text-decoration: none;
}
.p-button-label {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
}
.p-button .p-button-icon-left {
  margin-right: 0.5rem;
}
.pi-home:before {
  content: "\e925";
}
.pi:before {
  --webkit-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
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
.link {
  text-decoration: none;
  color: #6366F1;
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
.p-button-label {
  font-weight: 700!important;
}
.pi {
  font-size: 1rem;
}
.pi-arrow-left:before {
  content: "\e91a";
}
.pi:before {
  --webkit-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
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
}

.wrapper-content {
  text-align: center;
}
.lg\:px-8 {
  padding-left: 5rem!important;
  padding-right: 5rem!important;
}
.md\:px-6 {
  padding-left: 3rem!important;
  padding-right: 3rem!important;
}
.py-8 {
  padding-top: 20rem!important;
  padding-bottom: 5rem!important;
}
.surface-section {
  background-color: var(--surface-section)!important;
}
.px-3 {
  padding-left: 1rem!important;
  padding-right: 1rem!important;
}
.text-2xl {
  font-size: 1.5rem!important;
}
.font-bold {
  font-weight: 700!important;
}
.inline-block {
  display: inline-block!important;
}
.bg-white, .hover\:bg-white:hover {
  background-color: #fff!important;
}
.text-pink-500 {
  color: var(--pink-500)!important;
}
.text-center {
  text-align: center!important;
}
.mb-5 {
  margin-bottom: 2rem!important;
}
.mt-6 {
  margin-top: 3rem!important;
}
.text-6xl {
  font-size: 3rem!important;
}
.font-bold {
  font-weight: 700!important;
}
.text-900 {
  color: #212121!important;
}
.mb-6 {
  margin-bottom: 3rem!important;
}
.mt-0 {
  margin-top: 0!important;
}
.text-3xl {
  font-size: 1.75rem!important;
  font-weight: 400!important;
}
.text-700 {
  color: #616161!important;
}
.p-button.p-button-text {
  background-color: transparent;
  color: #6366F1;
  border-color: transparent;
}
.p-button {
  margin: 0;
  display: -webkit-inline-box;
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
.mr-2 {
  margin-right: 0.5rem!important;
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
</style>
