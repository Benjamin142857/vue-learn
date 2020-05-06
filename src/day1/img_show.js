var app = new Vue({
  el: "#app",
  data: {
    img_lst: [
        '../assert/1.jpg',
        '../assert/2.jpg',
        '../assert/3.jpg',
        '../assert/4.jpg',
        '../assert/5.jpg',
        '../assert/6.jpg',
        '../assert/7.jpg',
        '../assert/8.jpg',
    ],
    idx: 0,
  },
  methods: {
    to_left: function () {
      if (this.idx > 0) {
        this.idx -= 1;
      }
    },
    to_right: function () {
      if (this.idx < (this.img_lst.length - 1)) {
        this.idx += 1;
      }
    },
  },
})