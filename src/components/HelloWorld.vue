<template>
  <div class="hello">
    {{ number }}
    <div>
      <!-- named slot -->
      <slot name="header" />

      <!-- slot -->
      <slot />

      <button @click="alertTitle(msg)">Alert Title from Mixin</button>
      <button @click="number++">Increase Number</button>
      <button @click="addChar()">Add Char</button>
    </div>
    <p>titleSize: {{ titleSize }}</p>
    <p>msgSize: {{ msgSize }}</p>

    <div>
      <!-- Custom directive -->
      <span v-font-size.foo="18">Custom directive</span>
    </div>

    <div>
      <!-- Filter -->
      <!-- orjinal değeri değiştirmez, sadece görüntüde değişiklik sağlar -->
      <h3>Filter</h3>
      <p v-font-size.foo="24">
        {{ name | capitalize }}
      </p>
      <p>{{ basket | addParity }} - {{ typeof basket }}</p>
      <p>10 TL = {{ tl | convertUsd | addParity }}</p>
      <p>Computed ile: {{parityValue}}</p>
      <p>{{comp("val")}}</p>
    </div>
  </div>
</template>

<script>
import { global } from "@/mixins/global.js";

export default {
  name: "HelloWorld",
  mixins: [global],
  props: {
    msg: String,
  },
  data() {
    return {
      // number: 66, // mixin değerini ezer
      title: "Mükemmel Title",
      name: "patika filter",
      basket: 12,
      tl: 10,
    };
  },
  computed: {
    parityValue() {
      let value = this.tl;
      return (value / 9.6).toFixed(2) + "$";
    },
    comp() {
      return (val) => val
    },
  },
  filters: {
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    convertUsd(value) {
      if (!value) return "";
      return value / 9.6;
    },
    addParity(value) {
      if (!value) return "";
      return value + "$";
    },
  },
  methods: {
    addChar() {
      const mutatableMsg = this.msg + "+";
      this.$emit("add-char", mutatableMsg);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
