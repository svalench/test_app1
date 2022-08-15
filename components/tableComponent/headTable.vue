<template>
<thead>
    <tr v-for="(row, krow) in headRows" :key="krow">
      <th :width="field.width?field.width:'150px'"
          v-for="(field, k) in fields_"
          :key="k"
          v-if="visibility(field, row, k)">
        {{field.label?field.label:field.key}}
      </th>
      <th v-else></th>
    </tr>
    </thead>
</template>

<script>
export default {
  name: "headTable",
  props:{
    headRows:{
      type: Number,
      default: 1,
      validator: function (value) {
        return 1 <= value && value <=2
      }
    },
    fields:{
      default(){
        return []
      },
      type: Array,
    }
  },
  computed:{
    fields_(){
      let ff = JSON.parse(JSON.stringify(this.fields));
      return  ff.sort((a, b) => a.position > b.position ? 1 : -1);
    }
  },
  methods:{
    visibility(field, row, iterationRow) {
      let status = false;
      console.log(field?.position)
      status = field?.row && field?.row === row && field?.position === (iterationRow+1)
      if(field?.row === undefined){
        status = true;
      }
      return true
    },
  }
}
</script>

<style scoped>

</style>
