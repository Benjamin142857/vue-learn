
var app = new Vue({
  el: "#app",
  data: {
    num: 0,
    lst: ["a1", "a2", "a3"],
    box_in: "<h1>Stella</h1>",
    aaa: "margin-top: 50px;",
    c1: false,
    c2: false,
  },
  methods: {
    add: function () {
      if (this.num < 10) {
        this.num += 1;
      }
      else {
        alert("已达到最大值: 10.")
      }
    },
    sub: function () {
      if (this.num > 0) {
        this.num -= 1;
      }
      else {
        alert("已达到最小值: 0.")
      }
    },
    change_show: function () {
      this.tru = !this.tru;
    },
    switch_c1: function () {
      this.c1 = !this.c1;
    },
    switch_c2: function () {
      this.c2 = !this.c2;
    },
  },
})
