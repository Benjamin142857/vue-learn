function getNowFormatDate() {
  var date = new Date();
  var seperator1 = "-";
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var currentdate = year + seperator1 + month + seperator1 + strDate + " " + h + ":" + m + ":" + s;
  return currentdate;
}


let notebook = new Vue({
  el: "#notebook",
  data: {
    note_lst: [
      {'date': getNowFormatDate(), 'content': '写写代码'},
      {'date': getNowFormatDate(), 'content': '撩撩妹'},
      {'date': getNowFormatDate(), 'content': '看看美剧'},
    ],
    input_str: '',
  },
  methods: {
    add_note: function () {
      this.note_lst.push({
        'date': getNowFormatDate(),
        'content': this.input_str,
      });
      this.input_str = '';
    },
    del_note: function (idx) {
      this.note_lst.splice(idx, 1);
    },
    clear_note: function () {
      let nl = this.note_lst;
      nl.splice(0, nl.length);
    },
  },
})