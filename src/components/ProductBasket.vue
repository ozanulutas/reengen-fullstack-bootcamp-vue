<template>
  <b-dropdown id="dropdown-right" right variant="primary" class="m-2">
    <template #button-content>
      <i class="fas fa-shopping-basket"></i>
      Basket
      <b-badge variant="primary">{{ productBasket.length }}</b-badge>
    </template>
    <div v-if="productBasket.length > 0">
      <b-dropdown-item href="#" v-for="(item, i) in productBasket" :key="i">
        {{ item.title }} - {{ item.price }} $
      </b-dropdown-item>
    </div>
    <div v-else>Sepetinizde ürün bulunmamakta</div>
  </b-dropdown>
</template>

<script>
export default {
  name: "ProductBasket",
  props: {

  },
  data() {
    return {
      productBasket: [],
    };
  },
  methods: {
    addProduct(product) {
      if (this.productBasket.indexOf(product) === -1) {
        this.productBasket.unshift(product);
        // this.productBasket = [...this.productBasket, product];
      }
    },
  },
};
</script>

<style>
</style>