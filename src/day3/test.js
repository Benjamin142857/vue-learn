let big_title = Vue.component('big_title', {
  template: `
    <div class="jumbotron jumbotron-fluid" style="background: none">
      <div class="container">
        <h1 class="display-4">今日菜单</h1>
        <p class="lead">今天美丽的你也要好好吃饭噢！！！！！！</p>
      </div>
    </div>
  `,
})


let food_item = Vue.component('food_item', {
  props: ['food_obj', 'change_food'],
  template: `
<!--    <a href="#" class="list-group-item list-group-item-action" @click="change_food(food_obj.name)">{{ food_obj.name }} - {{ food_obj.price }}</a>-->
    <a href="#" class="list-group-item list-group-item-action" @click="$parent.change_food(food_obj.name)">{{ food_obj.name }} - {{ food_obj.price }}</a>
  `,
  methods: {
    // select_this: function () {
    //   this.$emit('change_food_this', this.$props.food_obj.name);
    // }
  },
})

let main = new Vue({
  el: "#main",
  data: {
    selected_food: '',
    food_lst: [
      {name: "红烧鲫鱼", price: 25},
      {name: "葱爆牛肉", price: 38},
      {name: "酸菜鱼", price: 35},
      {name: "干锅包菜", price: 18},
      {name: "虾仁炒蛋", price: 23},
      {name: "凉拌皮蛋", price: 15},
    ],
  },
  methods: {
    change_food: function (food_name) {
      console.log("777");
      this.selected_food = food_name;
    }
  },
})