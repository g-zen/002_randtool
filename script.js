function random_range(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

new Vue({
  el: '#app',
  data: {
    min_number: 1,
    max_number: 6,
    result: null,
  },
  methods: {
    generate_randnum: function () {
      this.result = random_range(this.min_number, this.max_number);
    }
  }
})
