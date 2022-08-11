<template>
<div>
  <b-container fluid="">
  <b-card no-body>
    <b-tabs id="tabs" card>
       <b-tab no-body title="Основной расчет">
        <b-editable-table style="width: 95vw;" bordered class="editable-table" v-model="calculation_data" :fields="calculation_field" @input-change="handleInput">
          <template #cell(isActive)="data">
            <span v-if="data.value">Yes</span>
            <span v-else>No</span>
          </template>
        </b-editable-table>
<!--          <vue-excel-editor v-model="jsondata1">-->
<!--        <vue-excel-column field="user"   label="User ID"       type="string" width="80px" />-->
<!--        <vue-excel-column field="name"   label="Name"          type="string" width="150px" />-->
<!--        <vue-excel-column field="phone"  label="Contact"       type="string" width="130px" />-->
<!--    </vue-excel-editor>-->
      </b-tab>
      <b-tab no-body title="Цены">
         <b-editable-table style="width: 95vw;" bordered class="editable-table" v-model="price_data" :fields="price_fields" @input-change="handleInput">
        </b-editable-table>
      </b-tab>
      <b-tab no-body title="Каталог ТГ">
         <b-editable-table style="width: 95vw;" bordered class="editable-table" v-model="TG1_data" :fields="TG1_fields" @input-change="handleInput">
        </b-editable-table>
      </b-tab>
    </b-tabs>
  </b-card>
  </b-container>
</div>
</template>

<script>
import BEditableTable from 'bootstrap-vue-editable-table';
import TableActions from "./tableActions";
import {mapGetters} from "vuex";
export default {
  components: {
    BEditableTable,
  },
  name: "tablePage",
   mounted() {
        console.log(this.$route.params.id_calc);
        if(this.$route.params.id_calc===undefined){
          this.calculation_data = [];
        }
   },
  data(){
    return{
      jsondata1:[
        {user: 'test', name: 'username', field:'+785425862'},
        {user: 'test', name: 'username', field:'+785425862'},
        {user: 'test', name: 'username', field:'+785425862'},
        {user: 'test', name: 'username', field:'+785425862'},
        {user: 'test', name: 'username', field:'+785425862'},
      ]
    }
  },
  computed:{
    calculation_data:{
      set(value){
        this.$store.commit('catalogs/calculation_data', value)
      },
      get(){
        return this.$store.state.catalogs.calculation_data
      }
    },
    TG1_data:{
      set(value){
        this.$store.commit('catalogs/TG1_data', value)
      },
      get(){
        return this.$store.state.catalogs.TG1_data
      }
    },
    price_data:{
      set(value){
        this.$store.commit('catalogs/price_data', value)
      },
      get(){
        return this.$store.state.catalogs.price_data
      }
    },
    ...mapGetters('catalogs', [
      'TG1_fields',
      'price_fields',
      'calculation_field',
    ])
  },
  methods: {
      handleInput(data) {}
  },
}
</script>

<style>
table.editable-table {
  margin: auto;
}

table.editable-table td {
  vertical-align: middle;
}

.editable-table .data-cell {
  padding: 8px;
  vertical-align: middle;
}

.editable-table .custom-checkbox {
  width: 50px;
}

.name-col {
  width: 120px;
}

.department-col {
  width: 150px;
}

.age-col {
  width: 100px;
}

.date-col {
  width: 200px;
}
.is-active-col {
  width: 100px
}
table.b-table {
    width: 100vw;
}
thead{
  position: sticky;
  top: 3.3rem;
  background-color: rgba(23, 45, 184, 0.54);
  color: #5e5d5c;
   backdrop-filter: blur(2px);
}
#tabs > div.card-header{
  position: sticky;
  top: 0;
  background-color: rgba(175, 176, 177, 0.61);
  backdrop-filter: blur(2px);
}
</style>
