<template>
    <Menubar :model="items" class="menubar">
      <template #start>
        <img alt="logo" src="../assets/img/logo.png" height="40" class="mr-2">
      </template>

      <template #end>
          <InputText placeholder="Search" type="text" class="start"/>
      </template>
    </Menubar>

</template>

<script>

export default {
name: "MenuBar",
  data() {
    return {
      items: [
        {
          label:'Главная',
          icon:'pi pi-fw pi-home',
        },
        {
          label:'Главные категории',
          icon:'pi pi-fw pi-shopping-cart',
          items:[
            {
              label:'Детский мир',
              icon:'pi pi-fw pi-align-left'
            },
            {
              label:'Транспорт',
              icon:'pi pi-fw pi-car'
            },
            {
              label:'Электроника',
              icon:'pi pi-fw pi-mobile'
            },
            {
              label:'Мода и стиль',
              icon:'pi pi-fw pi-palette'
            },

          ]
        },
        {
          label:'Сообщения',
          icon:'pi pi-fw pi-comment',
        },
        {
          label:'Профиль',
          icon:'pi pi-fw pi-user'
        },
        {
          label:'Настройка',
          icon:'pi pi-fw pi-cog'
        }
      ]
    }
  }
}
</script>

<style scoped>
.menubar {
  margin-bottom:30px;
}
</style>