// Vue.component('button-counter', {
//   data: function (a) {
//     return {
//       count: 0
//     }
//   },
//   props: ['title'],
//   template: '<button @click="btn_click">[{{ title }}] You clicked me {{ count }} times.</button>',
//   methods: {
//     'btn_click': function () {
//       this.count += 2;
//     },
//   },
// })


var demo = new Vue({
  el: '#demo',
  data: {
    msg: 'init',
  },
  methods: {
    btn_change: function () {
      this.msg = '666';
    },
  },
  beforeCreate: function () {
    console.log("before create");
  },
  created: function () {
    // this.msg = 'benjamin';
    console.log("created");
  },
  beforeMount: function () {
    // this.msg = 'stella;'
    console.log("before mount");
  },
  mounted: function () {
    // this.msg = 'heiheihei';
    console.log("mountd");
  },
  beforeUpdate: function () {
    console.log("before update");
  },
  updated: function () {
    console.log("updated");
  },
})