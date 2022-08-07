<template>
<div>
  <b-row>
    <b-col><b-select variant="primary" :disabled="this.headTableData.sbe?true:false" v-model="selected_sbe" :options="sbe_data"> </b-select></b-col>
    <b-col><b-select variant="primary" :disabled="!selected_sbe || this.headTableData.customer?true:false" v-model="selected_customer" :options="customer_data"> </b-select></b-col>
    <b-col></b-col>
    <b-col><b-btn variant="primary" >обновить справочники</b-btn></b-col>
  </b-row>
</div>
</template>

<script>
export default {
  name: "tableActions",
  props:{
    headTableData:{
      default(){return {}},
      type: Object
    }
  },
  data(){
    return{
      selected_sbe: this.headTableData?.sbe || null,
        selected_customer: this.headTableData?.customer || null,
        sbe_data:[
          {value:null, text:'Выберите СБЕ'},
          {value:'1040', text:'1040'},
          {value:'2010', text:'2010'},
        ],
        customer_data:[
          {value:null, text:'Выберите клиента'},
          {value:'30001254', text:'Тестовый клиент 1'},
          {value:'30001253', text:'Тестовый клиент 2'},
          {value:'30001252', text:'Тестовый клиент 3'},
          {value:'30001251', text:'клиент 4'},
        ],
    }
  }
}
</script>

<style scoped>

</style>
