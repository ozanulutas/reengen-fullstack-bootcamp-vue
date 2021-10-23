<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>2. Hafta - 1. Ders </h1>

    <hr>

    <h2>Mixins</h2>
    <HelloWorld :msg="msg" @add-char="addChar"/>
    <h2>Second HelloWorld Component</h2>
    <HelloWorld :msg="msg" @add-char="addChar">
      <template v-slot:header>
        <h4>Header Slot</h4>
      </template>
      <div>
        <h4>Slot</h4>
      </div>
    </HelloWorld>

    <hr>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      msg: "Patika"
    }
  },
  methods: {
    addChar(val) {
      this.msg = val;
    },
  },
}
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
</style>
