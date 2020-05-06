let input_group = Vue.component('input-group', {
  props: ['msg_1'],
  template: `
    <div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
        </div>
        <input type="text" :value="this.$parent.msg_1" @input="$emit('input', $event.target.value)"  class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
      </div>
      <slot></slot>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
        </div>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
      </div>
      <slot></slot>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
        </div>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
      </div>
    </div>

  `,
  methods: {
  },
})
let a_com = Vue.component('a-com', {
  template: `
        <h1 style="border: 1px solid peru; margin: 10px">aaaaaa</h1>
      `,
})
let b_com = Vue.component('b-com', {
  template: `
        <h1 style="border: 1px solid palevioletred; margin: 10px">bbbbbb</h1>
      `,
})
let c_com = Vue.component('c-com', {
  template: `
        <h1 style="border: 1px solid palegreen; margin: 10px">cccccc</h1>
      `,
})

let main = new Vue({
  el: "#main",
  data: {
    msg_1: '1',
    tag: a_com,
  },
  methods: {
    change_com: function (idx) {
      let lst = [a_com, b_com, c_com]
      this.tag = lst[idx];
    }
  },
})