<template>
  <b-container fluid="">
    <b-row>
      <b-col cols="9">
      <div style="position: sticky;top: 0; z-index: 100; background-color: rgba(206,206,204,0.27); backdrop-filter: blur(2px);">
        <hr>
        <div style="display: flex">
        <h4 style="color: #8f9aa3">
          Доступные мне расчеты
        </h4>
        <b-input placeholder="поиск" style="width: 30%; margin: 0px 10px 0px 40px"></b-input> <b-btn>искать</b-btn>
          </div>
        <hr>
      </div>
        <div >
          <b-card style="margin: 10px;"  title="Card Title" v-for="i in 10" :key="i">
            <b-card-text>
              With supporting text below as a natural lead-in to additional content.
            </b-card-text>
            <b-button href="#" :to="`/table/${i}`" variant="primary">перейти</b-button>
          </b-card>
        </div>
        </b-col>


      <b-col>
        <div style="position: sticky;top: 0; z-index: 100; background-color: rgba(206,206,204,0.27); backdrop-filter: blur(2px);">
        <hr>
          <div style="display: flex">
        <h4 style="color: #8f9aa3">
          Фильтры
        </h4>
          <b-btn style="margin-left: 20px;" v-show="!(JSON.stringify(activeFilter) === JSON.stringify(defaultFilter))" @click="resetFilter" variant="outline-danger">сброс</b-btn>
            <b-btn style="margin-left: 20px;" variant="outline-succes" @click="setFilter" v-show="!(JSON.stringify(activeFilter) === JSON.stringify(newFilter))">применить</b-btn>
          </div>
        <hr>
      </div>
        <div>
          <b-card title="СБЕ">
            <b-card-body>
              <b-form-group label="Выберите интересующие СБЕ" v-slot="{ ariaDescribedby }">
                <b-form-checkbox-group
                  id="checkbox-group-1"
                  v-model="newFilter.selected"
                  :options="options"
                  :aria-describedby="ariaDescribedby"
                  name="flavour-1"
                ></b-form-checkbox-group>
              </b-form-group>
            </b-card-body>
          </b-card>
          <b-card title="Дата">
            <b-card-body>
              <div>
                <label for="date-from">Начиная (с) - </label>
                <b-form-datepicker id="date-from" v-model="newFilter.dateStart" class="mb-2"></b-form-datepicker>
              </div>
              <div>
                <label for="date-to">заканчивая (по) - </label>
                <b-form-datepicker id="date-to" v-model="newFilter.dateEnd" class="mb-2"></b-form-datepicker>
              </div>
            </b-card-body>
          </b-card>
        </div>
      </b-col>
      </b-row>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
    ></b-pagination>
  </b-container>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return{
      currentPage: 1,
      rows: 10,
      perPage: 5,
      newFilter: {
        dateStart: null,
        dateEnd: null,
        selected: [],
      },
      defaultFilter: {
        dateStart: null,
        dateEnd: null,
        selected: [],
      },
      activeFilter: this.defaultFilter,
        options: [
          { text: '1040', value: '1040' },
          { text: '2010', value: '2010' },
          { text: '2020', value: '2020' },
          { text: '2030', value: '2030' }
        ]
    }
  },
  methods:{
    resetFilter(){
      this.activeFilter = this.defaultFilter;
    },
    setFilter(){
      this.activeFilter = JSON.parse(JSON.stringify(this.newFilter));
      console.log(JSON.stringify(this.activeFilter) === JSON.stringify(this.newFilter))
    }
  }
}
</script>
<style>
.custom-control-inline{
  display: block;
}
</style>
