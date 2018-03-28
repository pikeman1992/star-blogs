<template>
      <v-card class="product-container">
        <v-card-media
        v-bind:src="product.imgUrl" 
        height="150px">
        </v-card-media>

        <v-card-title>
          <div>
            <h3>{{product.name}}</h3>
            <h4>{{product.price}} $ X {{qtyInCart}}</h4>
          </div>
        </v-card-title>

        <v-card-actions class="button-section">
          <template v-if="qtyInCart == 0">
            <v-btn depressed block color="primary" @click="addToCart">Add to Cart</v-btn>
          </template>
          <template v-else>
            <v-btn depressed color="primary" @click="inc"><v-icon>add</v-icon></v-btn>
            <v-btn depressed color="primary" @click="dec"><v-icon>remove</v-icon></v-btn>
          </template>
        </v-card-actions>

      </v-card>

</template>

<script>
import State from "../state/shoppingCartState";
import _ from "lodash";

export default {
  props: ["product"],
  data() {
    return {
      shared: State.data
    };
  },
  methods: {
    addToCart() {
      State.add(this.product)
    },
    inc() {
      State.inc(this.product)
    },
    dec() {
      State.dec(this.product)
    }
  },
  computed: {
    qtyInCart() {
      var found = _.find(this.shared.cart, ["id", this.product.id]);
      if (typeof found == "object") {
        return found.qty;
      } else {
        return 0;
      }
    }
  },
  created() {}
};
</script>


<style scoped>
.product-container {
  margin-right: 10px;
  margin-bottom: 10px;
}
.button-section {
  display: flex;
  justify-content: space-between;
}
</style>
