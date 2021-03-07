Vue.component("list", {
  props: {
    sizes: {
      type: Array,
      required: true
    }
  },
  template: `
  <ul>
    <li v-for="size in sizes">{{size}}</li>
  </ul>`
});

Vue.component("sky", {
  template: `
  <div class="body">
    <div class="image"><img v-bind:src="image" /></div>
    <div class="information">
      <a v-bind:href="link">OPEN CSS FILE</a>
      <p v-if="grass">GRASS</p>
      <p v-else>{{title}}</p>

    <div
      v-for="(color, index) in colors"
      :key="colors.id"
      :style="{backgroundColor: color.color}"
      class="types-of-images"
      @mouseover="changeColor(index)"
    ></div>
    <button
      class="button"
      @click="incrementCoutner"
      :disabled="times > 9"
      :class="{'disabled-button':disabled}"
    >
      Increment Button
    </button>
    <p>counter: {{times}}</p>
  </div>
</div>`,
  data() {
    return {
      message: "VUE FIRST EXEMPLE",
      lookAt: "SKY",
      looksLike: "BLUE",
      selectedColorIndex: 0,
      description: "Learning is fun",
      link: "vue.css",
      grass: false,
      colors: [
        {
          id: 1,
          color: "green",
          image: "./assets/green.png",
          disabledButton: true
        },
        {
          id: 2,
          color: "blue",
          image: "./assets/blue.png",
          disabledButton: false
        }
      ],
      times: 0,
      disabled: false
    };
  },
  methods: {
    incrementCoutner: function() {
      this.times += 1;
      if (this.times > 9) {
        this.disabled = true;
      }
    },
    changeColor: function(index) {
      this.selectedColorIndex = index;
    }
  },

  computed: {
    title() {
      return `${this.lookAt} is ${this.looksLike}`;
    },
    image() {
      return this.colors[this.selectedColorIndex].image;
    },
    disabledButton() {
      return this.colors[this.selectedColorIndex].disabledButton;
    }
  }
});

var app = new Vue({
  el: "#app",
  data: {
    sizes: ["small", "medium", "big"]
  }
});
