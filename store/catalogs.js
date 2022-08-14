export const state = () => ({
  TG1_fields: [
    {key:'id', label: 'Идентификатор', type: 'text', editable: false},
    {key:'name', label: 'название', type: 'text', editable: false},
    {key:'count', label: 'количество', type: 'text', editable: true},
    {key:'catalog_price', label: 'каталожная цена', type: 'text', editable: false}
  ],
  price_fields:[
    {key:'id', label: 'Идентификатор', type: 'text', editable: false},
    {key:'name', label: 'название', type: 'text', editable: false},
    {key:'price', label: 'цена', type: 'text', editable: true}
  ],
  calculation_field:[
    {key:'id', label: 'Идентификатор', type: 'text', editable: false},
    {key:'name2', label: 'название', type: 'text', editable: true},
    {key:'name3', label: 'поле', type: 'text', editable: true},
    {key:'name4', label: 'поле', type: 'text', editable: true},
    {key:'name5', label: 'поле', type: 'text', editable: true},
    {key:'name6', label: 'поле', type: 'text', editable: true},
    { key: "type", label: "тип", type: "select", editable: true, class: "department-col" , options: [
          { value: 1, text: 'HR' },
          { value: 2, text: 'Engineer' },
          { value: 3, text: 'VP' },
          { value: 4, text: 'CEO'}
        ]},
  ],
  TG1_data: [
    {id:1, name: 'test1', count: 1, catalog_price:123},
    {id:2, name: 'test2', count: 1, catalog_price:432.3},
    {id:3, name: 'test3', count: 1, catalog_price:12.3},
    {id:4, name: 'test4', count: 1, catalog_price:123.3},
  ],
  price_data: [
    {id:1, name: 'test1', price:123},
  ],
  calculation_data: [
    {name2: 'test', id:1, name3: null, name4:undefined, name5: 324234, type:1},
    {id:2, name2: 'test', name3: null, name4:undefined, name5: 324234, type:1},
    {id:3, name2: 'test', name3: null, name4:undefined, name5: 324234, type:1},
    {id:4, name2: 'test', name3: null, name4:undefined, name5: 324234, type:1},
    {id:5, name2: 'test', name3: null, name4:undefined, name5: 324234, type:1},
    {id:6, name2: 'test', name3: null, name4:undefined, name5: 324234, type:1},
    {id:7, name2: 'test', name3: null, name4:undefined, name5: 324234, type:1},
    {id:8, name2: 'test', name3: null, name4:undefined, name5: 324234, type:1},
    {id:9, name2: 'test', name3: null, name4:undefined, name5: 324234, type:1},
    {id:10, name2: 'test', name3: null, name4:undefined, name5: 324234, type:1},
    {id:11, name2: 'test', name3: null, name4:undefined, name5: 324234, type:1},
    {id:12, name2: 'test', name3: null, name4:undefined, name5: 324234, type:1},
    {id:13, name2: 'test', name3: null, name4:undefined, name5: 324234, type:1},
    {id:14, name2: 'test', name3: null, name4:undefined, name5: 324234, type:1},
    {id:15, name2: 'test', name3: null, name4:undefined, name5: 324234, type:1},
    {id:16, name2: 'test', name3: null, name4:undefined, name5: 324234, type:1},
    {id:17, name2: 'test', name3: null, name4:undefined, name5: 324234, type:1},
    {id:18, name2: 'test', name3: null, name4:undefined, name5: 324234, type:1},
    {id:20, name2: 'test', name3: null, name4:undefined, name5: 324234, type:1},
    {id:21, name2: 'test', name3: null, name4:undefined, name5: 324234, type:1},
    {id:22, name2: 'test', name3: null, name4:undefined, name5: 324234, type:1},
    {id:23, name2: 'test', name3: null, name4:undefined, name5: 324234, type:1},
    {id:24, name2: 'test', name3: null, name4:undefined, name5: 324234, type:1},
    {id:25, name2: 'test', name3: null, name4:undefined, name5: 324234, type:1},
    {id:26, name2: 'test', name3: null, name4:undefined, name5: 324234, type:1},
    {id:27, name2: 'test', name3: null, name4:undefined, name5: 324234, type:1},
    {id:28, name2: 'test', name3: null, name4:undefined, name5: 324234, type:1},
  ],
})

export const getters = {
  TG1_fields(state) {
    return state.TG1_fields
  },
  price_fields(state) {
    return state.price_fields
  },
  TG1_data(state) {
    return state.TG1_data
  },
  price_data(state) {
    return state.price_data
  },
  calculation_field(state) {
    return state.calculation_field
  },
  calculation_data(state) {
    return state.calculation_field
  },
}

export const mutations = {
  price_data(state, price_data) {
    this.state.price_data = price_data
  },
  TG1_data(state, TG1_data) {
    this.state.price_data = TG1_data
  },
  calculation_data(state, calculation_data) {
    this.state.calculation_data = calculation_data
  },

}

export const actions = {

}
