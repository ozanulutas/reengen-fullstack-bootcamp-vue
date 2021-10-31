<template>
  <div class="hello">
    <p>
      {{ $store.state.title }}
      {{ title }}
    </p>
    <div>
      <input type="number" v-model="value" />
      <button @click="getNumSum">Get Sum</button>
    </div>
    <div>
      toplam: {{ calNumber }}
    </div>
    <div>
      toplam with plugin: {{ $numberSum(5) }}
    </div>
    <div>
      italic with plugin: <span v-html="$italicaHTML('italic with plugin')"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      value: 0,
    };
  },
  computed: {
    // store'un computedden kullanılması daha kullanışlı
    title() {
      return this.$store.state.title;
    },
    calNumber() {
      return this.$store.state.number
    }
  },
  methods: {
    getNumSum() {
      this.$store.dispatch("getNumber", parseInt(this.value));
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
