<template>
  <div id="cart">

    <h2 class="cart-title">SHOPPING CART</h2>

    <v-list two-line>
      <template v-for="(item,key) in productList" >

        <v-list-tile @click="" v-bind:key="key">
          <v-list-tile-avatar v-bind:tile="avatar">
            <img v-bind:src="item.imgUrl">
          </v-list-tile-avatar>

          <v-list-tile-content>

            <v-list-tile-title class="product-title">
              {{item.name}}
            </v-list-tile-title>

            <v-list-tile-sub-title class="product-price">
              <span class='amount text--primary'>x {{item.qty}}</span>
              <span class='price text--primary'>{{item.price * item.qty}} $</span>
            </v-list-tile-sub-title>

          </v-list-tile-content>
        </v-list-tile>

      </template>
    </v-list>

    <div class="product-total">
      <h3>Total:</h3>
      <h4>{{total}} $</h4>
    </div>

    <v-btn block depressed color="success">Buy</v-btn>

  </div>
</template>

<script>
import State from "../state/shoppingCartState";
import _ from "lodash";

export default {
  data() {
    return {
      productList: State.data.cart,
      avatar: true,
    };
  },
  methods: {
   
  },
  computed: {
    total() {
      return _.sumBy(this.productList, function(item){
        return (item.price * item.qty)
      });
    },
  
  },
  created() {
  }
};
</script>


<style scoped>
.cart-title {
  background-color: rgb(54, 54, 54);
  color: white;
  padding: 10px;
  text-align: center;
}
.product-title {
  font-weight: 600;
}
.product-price {
  /* background-color: aquamarine; */
  display: flex;
  justify-content: space-between;
}
.product-price .amount {
  /* background-color: red; */
  font-weight: 500;
}
.product-price .price {
  /* background-color: blue; */
  font-weight: 500;
}
.product-total {
  background-color: rgb(230, 230, 230);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
</style>
