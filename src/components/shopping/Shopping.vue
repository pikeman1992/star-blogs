<template>

    <v-layout row wrap id="cart">

      

      <v-flex xs12 md8>

        <h2 class="cart-title">PRODUCT LIST</h2>

        <v-layout row wrap id="product-list">

          <v-flex xs12 sm6 lg4 v-for="(item,key) in itemList" :key="key">
            <app-product v-bind:product="item"></app-product>
          </v-flex>

        </v-layout>
      
      </v-flex>

      <v-flex xs12 md4>
        <app-cart id="cart"></app-cart>
      </v-flex>
      
    </v-layout>

</template>

<script>
import Product from "./Product";
import Cart from "./Cart";

export default {
  components: {
    "app-product": Product,
    "app-cart": Cart
  },
  data() {
    return {
      itemList: []
    };
  },
  methods: {
    getProductList() {
      this.$http
        .get("https://personal-d3408.firebaseio.com/products.json")
        .then(res => {
          if (res.data == null) {
            return;
          }
          return res.json();
        })
        .then(data => {
          for (let key in data) {
            data[key].id = key;
            this.itemList.push(data[key]);
          }
        });
    }
  },
  computed: {},
  created() {
    this.getProductList();
  }
};
</script>


<style scoped>
.cart-title {
  background-color: rgb(45, 54, 138);
  color: white;
  padding: 10px;
  text-align: center;
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
