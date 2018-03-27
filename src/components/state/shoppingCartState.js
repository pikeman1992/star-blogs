import _ from "lodash"

export default {
  data: {
    cart: []
  },
  add(product) {
    var found = _.find(this.data.cart, ['id', product.id])
    if (typeof found != 'object') {
      this.data.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        imgUrl: product.imgUrl,
        qty: 1
      })
    }
  },
  inc(product) {
    var found = _.find(this.data.cart, ['id', product.id])
    if (typeof found == 'object') {
      var index = _.indexOf(this.data.cart, found)
      this.data.cart[index].qty++
    }
  },
  dec(product) {
    var found = _.find(this.data.cart, ['id', product.id])
    if (typeof found == 'object') {
      var index = _.indexOf(this.data.cart, found)

      if (this.data.cart[index].qty == 1) {
        this.data.cart.splice(index, 1)
      } else {
        this.data.cart[index].qty--
      }
    }
  }
}