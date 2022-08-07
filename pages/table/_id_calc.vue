<template>
<div>
  <b-container fluid="" style="margin: 15px 0px 15px 0;">
    <table-actions :headTableData="{sbe:'2010', customer:'30001253'}" ></table-actions>
  </b-container>
   <table-page></table-page>
  </div>
</template>

<script>
import TableActions from "../../components/tables_comp/tableActions";
import TablePage from "../../components/tables_comp/tablePage";
export default {
  components: {
    TablePage,
    TableActions,
  },
  name: "_id_calc",
  data() {
      return {

    };
    },
  methods: {

  },
}
</script>

<style scoped>

</style>
