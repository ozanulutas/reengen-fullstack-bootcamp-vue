<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="goHelp()">Go help</button>
    <p>
      {{$route.params}}
    </p>
    <p>
      {{asd}}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    asd: String
  },
  created() {
    console.log(this.$route.params);
  },
  methods: {
    goHelp() {
      // genelde href değil metod ile programatik olarak yönlendirilir
      // this.$router.push("/help");
      // query vermek
      this.$router.push({ path: '/help', query: { userId: '123' } })

      // params vermek
      // this.$router.push({ name: 'about', params: { id: '123' } })
    }
  }
}
</script>

<style>

</style>
