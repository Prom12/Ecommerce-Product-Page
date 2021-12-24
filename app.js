const app = Vue.createApp({
  data() {
    return {
      count: 0,
      cart: 0,
      nav_tab: false,
    };
  },
  methods: {
    increment() {
      this.count += 1;
    },
    decrement() {
      if (this.count === 0) return;
      this.count -= 1;
    },
    toggle_nav() {
      this.nav_tab = !this.nav_tab;
    },
    handleView() {
      this.nav_tab = window.innerWidth >= 600;
    },
  },

  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
});

app.mount("#app");
