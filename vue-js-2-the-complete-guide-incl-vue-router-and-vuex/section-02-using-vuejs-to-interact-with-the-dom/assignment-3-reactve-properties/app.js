new Vue({
  el: "#exercise",
  data: {
    value: 0,
  },
  computed: {
    result: function () {
      return this.value < 37 ? "not done yet" : "done";
    },
  },
  watch: {
    result: function () {
      const tm = this;
      setTimeout(function () {
        tm.value = 0;
      }, 5000);
    },
  },
});
