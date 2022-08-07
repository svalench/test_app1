<template>
<div>
  <b-container fluid="" style="margin: 15px;">
    <table-actions></table-actions>
  </b-container>
     <table-page></table-page>
  </div>
</template>

<script>
import BEditableTable from 'bootstrap-vue-editable-table';
import TableActions from "../../components/tables_comp/tableActions";
import TablePage from "../../components/tables_comp/tablePage";
export default {
  components: {
    TablePage,
    TableActions,
    BEditableTable
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
