let btn = Vue.component('button-counter', {
  data: function (a) {
    return {
      count: 0,
    }
  },
  props: ['BtnTitle'],
  template: '<button @click="btn_click">[{{ BtnTitle }}] You clicked me {{ count }} times.</button>',
  methods: {
    'btn_click': function () {
      this.count += 2;
      this.title = 'myself'
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
    console.log(this.title + "before update");
  },
  updated: function () {
    console.log(this.title + "updated");
  },
  beforeDestroy: function () {
    console.log("beforeDestory");
  },
  destroyed: function () {
    console.log("destroy");
  },
})



let demo = new Vue({
  el: '#demo',
  data: {
    msg: 'init',
    btn_show: true,
  },
  methods: {
    btn_change: function () {
      this.msg = '666';
      // this.btn_show = !this.btn_show;
      console.log(this.my_box);
    },
  },
  components: {
    my_box: Vue.component('my-box', {
      data: function (a) {
        return {
          title: "my-box",
        }
      },
      template: '<div><h1>{{ title }}</h1></div>',
    }),
  },
})