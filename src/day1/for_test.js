let the_screen = new Vue({
  el: '#screen',
  data: {
    meal_lst: [
      {'name': '牛肉', 'weight': 500, 'price': 20},
      {'name': '鸡肉', 'weight': 1000, 'price': 30},
      {'name': '猪肉', 'weight': 2000, 'price': 60},
      {'name': '三文鱼', 'weight': 200, 'price': 120},
      {'name': '鹅肝', 'weight': 100, 'price': 220},
      {'name': '老虎虾', 'weight': 800, 'price': 500},
      {'name': '金枪鱼', 'weight': 5000, 'price': 2200},
      {'name': '芝士', 'weight': 1200, 'price': 1030},
    ],
  },
  methods: {
    del_meal: function (idx) {
      this.meal_lst.splice(idx, 1);
    },
  },
})

let panel = new Vue({
  el: '#panel',
  data: {
    new_meal_name: "",
    new_meal_weight: "",
    new_meal_price: "",
  },
  methods: {
    'add_meal': function () {
      if (this.new_meal_name && this.new_meal_weight && this.new_meal_price) {
        the_screen.meal_lst.push({
          'name': this.new_meal_name,
          'weight': parseInt(this.new_meal_weight),
          'price': parseInt(this.new_meal_price),
        });
      }
      else {
        alert('内容不能为空!!!');
      }
    },
    'clear_meal': function () {
      let ml = the_screen.meal_lst;
      ml.splice(0, ml.length);
    },

  }
})