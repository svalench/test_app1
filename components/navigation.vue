<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand href="#">AppCalcAPS</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/" href="#">Главная</b-nav-item>
        <b-nav-item to="/table" href="#">Новый расчет</b-nav-item>
        <b-nav-item to="/profile" href="#" :disabled="!user.role">Профиль</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="найти расчет"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">поиск</b-button>
        </b-nav-form>



        <b-nav-item-dropdown v-if="user.role" right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <b-img src="~/assets/img/ava.png" v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
            <em>Valenchits</em>
          </template>
          <b-dropdown-item to="/profile" href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item v-else>Login</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "navigation",
  data(){
    return{
      mainProps: {width: 30, height: 30, class: 'm1' },
    }
  },
  computed:{
    ...mapGetters('data_user', [
      'user',
    ])
  },
}
</script>

<style scoped>

</style>
