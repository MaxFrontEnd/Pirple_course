var app = new Vue({
  el: "#app",
  data: {
    message: "VUE FIRST EXEMPLE",
    description: "Learning is fun",
    image: "./assets/green.png",
    link: "vue.css",
    grass: false,
    sizes: ["big", "medium", "small"],
    colors: [
      { id: 1, color: "green", image: "./assets/green.png" },
      { id: 2, color: "blue", image: "./assets/blue.png" }
    ],
    times: 0,
    disabled: false
  },

  methods: {
    incrementCoutner: function() {
      this.times += 1;
      if (this.times > 9) {
        this.disabled = true;
      }
    },
    changeColor: function(colorImage) {
      this.image = colorImage;
    }
  }
});
