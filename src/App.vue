<template>
  <div id="app">
    <b-container>
      <img alt="Vue logo" src="./assets/logo.png" />

      <hr />

      <DynamicClass msg="DynamicClass" />

      <hr />
  
      <h1>Product Card</h1>
      <b-dropdown id="dropdown-right" right variant="primary" class="m-2">
        <template #button-content>
          <i class="fas fa-shopping-basket"></i>
          Basket
          <b-badge variant="primary">{{ allBasketItems }}</b-badge>
        </template>
        <div v-if="productBasket.length > 0">
          <b-dropdown-item 
            href="#"
            v-for="(item, i) in productBasket" :key="i"
          >
            {{item.title}} - {{item.price * item.count}} $ ({{item.count}})
            <b-button variant="primary" @click="productCal({value: item, type: '-'})">-</b-button>
            <b-button variant="primary" @click="productCal({value: item, type: '+'})">+</b-button>
            <b-button variant="danger" @click="productCal({value: item, type: 'del'})">x</b-button>
          </b-dropdown-item>
        </div>
        <div class="text-center" v-else>
          Sepetinizde ürün bulunmamakta
        </div>
      </b-dropdown>

      <!-- <ProductBasket/> -->

      <b-row class="d-flex justify-content-center">
        <ProductCard 
          v-for="(item, i) in productList" :key="i" 
          :info="item"
          @add-product="productCal({value: $event, type: 'add'})"
        />
      </b-row>
      <hr />
    </b-container>
  </div>
</template>

<script>
import DynamicClass from "./components/DynamicClass.vue";
import ProductCard from "./components/ProductCard.vue";
// import ProductBasket from "./components/ProductBasket.vue";

export default {
  name: "App",
  components: {
    DynamicClass,
    // ProductBasket,
    ProductCard,
  },
  data() {
    return {
      productList: [
        { 
          title: 'Title 1', 
          summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quam.",
          rating: 4,
          price: 10,
        },
        { 
          title: 'Title 2', 
          summary: "Lorem ipsum dolor sit amet.",
          rating: 3,
          price: 20,
        },
        { 
          title: 'Title 3', 
          summary: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
          price: 5,
        },
      ],
      productBasket: [],
    }
  },
  computed: {
    allBasketItems() {
      let count = 0;
      for (let index = 0; index < this.productBasket.length; index++) {
        count += this.productBasket[index].count
      }
      return count;
    }
  },
  methods: {
    addProduct(product) {
      const isSameItem = this.productBasket.filter(item => item.title === product.title).length;
      
      if(isSameItem) {
        let index = this.productBasket.findIndex(item => item.title === product.title);
        this.productBasket[index].count++;
      } else {
        this.productBasket.unshift({...product, count: 1});
      }
    },
    removeProduct(i) {
      this.productBasket.splice(i, 1);
    },
    decraseProduct(val) {
      let index = this.productBasket.findIndex(item => item.title === val.title);
      if(this.productBasket[index].count > 1) {
        this.productBasket[index].count--;
      } else {
        this.removeProduct(index);
      }
    },
    increaseProduct(val) {
      let index = this.productBasket.findIndex(item => item.title === val.title);
      this.productBasket[index].count++;
    },
    productCal(val) {
      let index = this.productBasket.findIndex(item => item.title === val.value.title);

      switch (val.type) {
        case "add":
          if(index >= 0) {
            this.productBasket[index].count++;
          } else {
            this.productBasket.unshift({...val.value, count: 1});
          }
          break;
        case "+":
          this.productBasket[index].count++;
          break;
        case "-":
          if(this.productBasket[index].count > 1) {
            this.productBasket[index].count--;
          } else {
            this.productBasket.splice(index, 1)
          }
          break;
        case "del":
          this.productBasket.splice(index, 1);
          break;
      
        default:
          break;
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
hr {
  margin: 3rem 0;
}
</style>
