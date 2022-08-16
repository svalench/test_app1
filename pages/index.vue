<template>
  <b-container fluid="">
    <b-row>

       <b-col style="height: 80vh; overflow-x: auto;">
        <div style="position: sticky;top: 0; z-index: 100; background-color: rgba(206,206,204,0.27); backdrop-filter: blur(2px);">
        <hr>
          <div style="display: flex">
        <h4 style="color: #8f9aa3">
          Фильтры
        </h4>
         </div>
        <hr>
      </div>
        <div>
          <b-card title="СБЕ">

              <b-form-group label="Выберите интересующие СБЕ" v-slot="{ ariaDescribedby }">
                <b-form-checkbox-group
                  id="checkbox-group-1"
                  v-model="newFilter.selected"
                  :options="options"
                  :aria-describedby="ariaDescribedby"
                  name="flavour-1"
                ></b-form-checkbox-group>
              </b-form-group>

          </b-card>
          <b-card title="Дата">

              <div>
                <label for="date-from">Начиная (с) - </label>
                <b-form-datepicker id="date-from" v-model="newFilter.dateStart" class="mb-2"></b-form-datepicker>
              </div>
              <div>
                <label for="date-to">заканчивая (по) - </label>
                <b-form-datepicker id="date-to" v-model="newFilter.dateEnd" class="mb-2"></b-form-datepicker>
              </div>
          </b-card>
        </div>
         <div align="center" style="margin-top: 10px;">
           <b-btn>more</b-btn>
         </div>
      </b-col>

      <b-col cols="10" style="height: 80vh; overflow-x: auto;">
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
<!--        <div >-->
<!--          <b-card style="margin: 10px;"  title="Card Title" v-for="i in 10" :key="i">-->
<!--            <b-card-text>-->
<!--              With supporting text below as a natural lead-in to additional content.-->
<!--            </b-card-text>-->
<!--            <b-button href="#" :to="`/table/${i}`" variant="primary">перейти</b-button>-->
<!--          </b-card>-->
<!--        </div>-->
          <b-table :fields="fields" :items="items" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc">
            <template #cell(name)="row">
              <nuxt-link :to="'table/1'">{{row.item.name}}</nuxt-link>
            </template>
          </b-table>
        <dv>{{sortBy}}{{sortDesc}}</dv>
        <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
    ></b-pagination>
        </b-col>


      </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return{
      sortBy: 'age',
        sortDesc: false,
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
        ],
       fields: [
          { key: 'name', label: 'Название', sortable: true },
          { key: 'uername', label: 'Создан', sortable: true },
          { key: 'date_add', label: 'Дата создание', sortable: true },
          { key: 'date_upd', label: 'Дата обновление', sortable: true },
        ],
      items: [
          { name: 'Расчет 1', uername: 'Dickerson', date_add: '08-08-2022T00.00.00', date_upd: '08-08-2022T00.00.00' },
          { name: 'Расчет 1copy', uername: 'Dickerson', date_add: '08-08-2022T00.00.00', date_upd: '08-08-2022T00.00.00' },
          {
            name: 'Расчет 1eta',
            uername: 'Geneva',
            date_add: '08-08-2022T00.00.00',
            date_upd: '08-08-2022T00.00.00',
            _rowVariant: 'danger'
          },
          {
            name: 'Расчет плохой',
            uername: 'Thor',
            date_add: '08-08-2022T00.00.00',
            date_upd: '08-08-2022T00.00.00',
            _cellVariants: { name: 'info', uername: 'warning' }
          },
         { name: 'Расчет 16', uername: 'Dickerson', date_add: '08-08-2022T00.00.00', date_upd: '08-08-2022T00.00.00' },
         { name: 'Расчет 1.3', uername: 'Dickerson', date_add: '08-08-2022T00.00.00', date_upd: '08-08-2022T00.00.00' },
         { name: 'Расчет 1.3', uername: 'Dickerson', date_add: '08-08-2022T00.00.00', date_upd: '08-08-2022T00.00.00' },
         { name: 'Расчет 1.3', uername: 'Dickerson', date_add: '08-08-2022T00.00.00', date_upd: '08-08-2022T00.00.00' },
         { name: 'Расчет 1.3', uername: 'Dickerson', date_add: '08-08-2022T00.00.00', date_upd: '08-08-2022T00.00.00' },
         { name: 'Расчет 1.3', uername: 'Dickerson', date_add: '08-08-2022T00.00.00', date_upd: '08-08-2022T00.00.00' },
         { name: 'Расчет 1.3', uername: 'Dickerson', date_add: '08-08-2022T00.00.00', date_upd: '08-08-2022T00.00.00' },
         { name: 'Расчет 1.3', uername: 'Dickerson', date_add: '08-08-2022T00.00.00', date_upd: '08-08-2022T00.00.00' },

        ]
    }
  },
  methods:{
    sortTable(data){

    },
  }
}
</script>
<style>
.custom-control-inline{
  display: block;
}
</style>
