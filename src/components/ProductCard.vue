<template>
  <b-card
    :title="info.title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="m-2"
    body-class="d-flex flex-column"
  >
    <b-card-text style="flex: 1">
      <div class="mb-3">
        {{ info.summary }}
      </div>
    </b-card-text>
    <footer>
      <div>
        <b>Price </b> <b-badge variant="primary">{{ info.price }} $</b-badge>
      </div>
      <div v-if="info.rating > 0">
        <b>Rating </b> 
        <i 
          class="fas fa-star"
          style="color: orange" 
          v-for="(star, i) in info.rating" :key="'full-' + i"
        >
        </i>
        <i 
          class="fas fa-star"
          v-for="(star, i) in (5 - info.rating)" :key="'empty-' + i"
        >
        </i>
      </div>
      <div>
        <b-button @click="addToBasket(info)">Buy</b-button>
      </div>
    </footer>
  </b-card>
</template>

<script>
export default {
  props: {
    info: Object,
  },
  methods: {
    addToBasket(val) {
      this.$emit("add-product", val);
    },
  },
}
</script>

<style>

</style>