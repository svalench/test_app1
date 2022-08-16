<template>
<div>
  <b-container fluid="" style="margin: 15px;">
    <table-actions></table-actions>
  </b-container>
    <body-table></body-table>
  </div>
</template>

<script>
import BEditableTable from 'bootstrap-vue-editable-table';
import TableActions from "../../components/tables_comp/tableActions";
import TablePage from "../../components/tables_comp/tablePage";
import BodyTable from "../../components/tableComponent/bodyTable";
export default {
  components: {
    TablePage,
    TableActions,
    BEditableTable,
    BodyTable
  },
  name: "index",
  data() {
      return {

      }
    },
  methods: {

  },
}
</script>

<style>

</style>
