<template>
<div>
  <b-container>
    <b-row>
      <b-col cols="4" class="data-user-box">
        <b-row align="center">
          <b-col>
            <b-img src="~/assets/img/ava.png" v-bind="mainProps" rounded alt="Rounded image"></b-img>
            </b-col>
        </b-row>
        <b-row>
          <b-col>
            <label for="username">username:</label>
            <b-form-input id="username" size="sm" disabled  v-model="user.username" ></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <label for="firstName">name:</label>
            <b-form-input id="firstName" size="sm" disabled  v-model="user.firstName" ></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <label for="lastName">last name:</label>
            <b-form-input id="lastName" size="sm" disabled  v-model="user.lastName" ></b-form-input>
          </b-col>
        </b-row>
        <b-row style="padding: 10px;"><b-col><b-btn variant="outline-primary">Выйти</b-btn></b-col></b-row>
      </b-col>
      <b-col cols="1">

      </b-col>
      <b-col >
        <div>
          <h4>История ваших действий</h4>
        </div>
        <div style="height: 70vh; overflow-x: auto" >
          <b-card style="margin: 10px;"  title="Card Title" v-for="i in 12" :key="i">
            <b-card-text>
              With supporting text below as a natural lead-in to additional content.
            </b-card-text>
            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </div>
      </b-col>
    </b-row>
    <hr>
    <div style="width: 100%; text-align: center; color: #8f9aa3">
      <h5>список документов</h5>
    </div>
    <hr>
    <b-row></b-row>
  </b-container>
</div>
</template>

<script>
import {mapMutations, mapGetters}  from 'vuex'
export default {
  name: "profile",
  data(){
    return{
       mainProps: { width: 230, height: 230, class: 'm1'},
    }
  },
  computed:{
    ...mapGetters('data_user', [
      'user',
    ])
  },
}
</script>

<style>
.data-user-box{
  padding: 10px;
  margin: 2px;
  border: 1px solid rgba(94,92,92,0.9);
  border-radius: 12px;
  box-shadow: 10px 5px 5px rgba(153, 150, 150, 0.9);
  transition: all .7s;
}
.data-user-box:hover{
  box-shadow: 10px 5px 5px rgba(90, 89, 89, 0.9);
}
</style>
