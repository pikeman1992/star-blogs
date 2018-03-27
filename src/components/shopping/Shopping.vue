<template>

    <v-layout row wrap id="cart">

      <v-flex xs12 md8>
        
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
            console.log(data);
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
.video-container {
  max-width: 500px;
  margin: auto;
}
</style>
