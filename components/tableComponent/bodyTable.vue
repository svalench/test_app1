<template>
<b-container fluid="">
  <table ref="table">
    <head-table  :fields="calculation_field"></head-table>
    <tbody>
    <tr  v-for="(item, k) in calculation_data" :key="k">
      <td  v-for="(data, kdata) in item" :key="kdata">
        <div class="b-cell"
          @click="activateTd($event.target)"
          @dblclick="editField($event.target)"
          @blur="unfocusTd($event.target)"
        >
        {{data}}</div>
      </td>
    </tr>
    </tbody>
  </table>
</b-container>
</template>

<script>
import HeadTable from "./headTable";
import {mapGetters} from "vuex";
export default {
  name: "bodyTable",
  components: {HeadTable},
  data(){
    return{
      activeCell: null,
    }
  },
  methods:{
    unfocusTd(element){
      this.deeditTD(element)
      element.style.backgroundColor = '#fff'
    },
    activateTd(element){
      let tdselem = document.getElementsByClassName('b-cell');
      for(let i of tdselem){
        i.style.backgroundColor = '#fff';
        i.style.border = null;
        this.activeCell = element
      }
      element.style.border = '1px solid red'
    },
    deeditTD(element){
       element.removeAttribute('contenteditable')
      element.focus();
    },
    editField(element){
      element.setAttribute('contenteditable', true)
      element.focus()
      document.execCommand('selectAll', false, null);
    },
    goUpDownCell(down=false){
      let currentCell =  this.activeCell.parentElement;
      let currentRow =  this.activeCell.parentElement.parentElement;
      let nextRow = currentRow.previousSibling;
      if(down) nextRow = currentRow.nextSibling;
      let indexCell = Array.from(currentRow.children).indexOf(currentCell)
      if(indexCell < 0) return;
      if(nextRow){
        this.unfocusTd(this.activeCell);
        this.activateTd(nextRow.children[indexCell].children[0])
      }
      if(!nextRow && down){
        console.log( this.calculation_data)
      }
    },
    /**
     *   Передвигает выделение ячейки на следующую в DOM
     *    @param go_back: bool
     */
    goNextCell(go_back=false){
      let curr_cel =  this.activeCell.parentElement;
      let nextCel = curr_cel.nextSibling;
      if(go_back) nextCel = curr_cel.previousSibling;
      if(!nextCel){
        let nextRow = this.activeCell.parentElement.parentElement.nextSibling;
        if(go_back) nextRow =  this.activeCell.parentElement.parentElement.previousSibling;
        if(!nextRow) return;
        nextCel = nextRow.firstChild;
        if(go_back) nextCel = nextRow.lastChild;
      }
      if(nextCel){
        this.unfocusTd(this.activeCell)
        this.activateTd(nextCel.children[0])
      }

    },
    /**
     *
     * @param event
     */
    kepressListener(event){
      if(event.code ==='ArrowDown'){this.goUpDownCell(true)}
      if(event.code ==='ArrowUp'){this.goUpDownCell()}
      if(event.code ==='ArrowRight'){this.goNextCell()}
      if(event.code ==='ArrowLeft'){this.goNextCell(true)}
        if (event.code === 'Enter' && this.activeCell!==null) {

            if(!event.shiftKey){
               event.preventDefault()
            }
              if(this.activeCell.getAttribute('contenteditable')){
                if(!event?.shiftKey){
                  this.deeditTD(this.activeCell)
                }
              }else{
                this.editField(this.activeCell);
              }

        }
    }
  },
  computed: {
    calculation_data: {
      set(value) {
        this.$store.commit('catalogs/calculation_data', value)
      },
      get() {
        let arr = []
        for(let elem of this.$store.state.catalogs.calculation_data){
          let obj = {};
          for(let field of this.calculation_field){
            let name = field?.key
            if(name)
            obj[name] = elem[name]?elem[name]:''
          }
          arr.push(obj)
        }
        console.log(arr)
        this.$store.commit('catalogs/calculation_data', arr)
        this.$forceUpdate()
        return this.$store.state.catalogs.calculation_data
      }
    },
    ...mapGetters('catalogs', [
      'TG1_fields',
      'price_fields',
      'calculation_field',
    ]),
  },
  mounted(){
      window.addEventListener('keydown', this.kepressListener)
    },
  beforeDestroy() {
    window.removeEventListener('keydown', this.kepressListener)
  }
}
</script>

<style>
table, th, td {
  border: 1px solid;
  width: 80px;
  height: 30px;

}
table {
  width: 100%;
}
.b-cell{
  cursor: cell;
  width: 100%;
  height: 100%;
  border-radius: 4px;
   transition: all .2s linear;
}

</style>
