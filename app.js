const app = Vue.createApp({
  data() {
    return {
      count: 1,
      cart: 0,
      nav_tab: false,
      cart_tab: false,
      products: [],
    };
  },
  methods: {
    CartAdd(Product) {
      var value = this.products.some((product) => {
        return Product.name == product.name;
      });
      console.log(value);
      if (value) {
        this.products.splice(Product, 1);
        this.products.unshift(Product);
      } else {
        this.products.unshift(Product);
        this.cart++;
      }
    },
    CartDelete(Product) {
      this.products.splice(Product, 1);
    },
    increment() {
      this.count += 1;
    },
    decrement() {
      if (this.count === 1) return;
      this.count -= 1;
    },
    toggle_nav() {
      this.nav_tab = !this.nav_tab;
    },
    handleView() {
      this.nav_tab = window.innerWidth >= 600;
    },
    toggle_cart() {
      this.cart_tab = !this.cart_tab;
    },
  },

  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
});

app.mount("#app");
