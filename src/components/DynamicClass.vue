<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input
      v-model="radioVal"
      type="radio"
      id="html"
      name="fav_language"
      value="HTML"
    />
    <label for="html">HTML</label><br />
    <input
      v-model="radioVal"
      type="radio"
      id="css"
      name="fav_language"
      value="CSS"
    />
    <label for="css">CSS</label><br />
    <input
      v-model="radioVal"
      type="radio"
      id="javascript"
      name="fav_language"
      value="JavaScript"
    />
    <label for="javascript">JavaScript</label>

    <div :class="customClass[radioVal]">
      <h2>With Data</h2>
      {{ radioVal }}
    </div>
    <div :class="compCustomClass">
      <h2>With Computed</h2>
      {{ radioVal }}
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  layout: "default",
  props: {
    msg: String,
  },
  data() {
    return {
      radioVal: "",
      customClass: {
        HTML: "HTML",
        CSS: "CSS",
        JavaScript: "JavaScript",
      },
    };
  },
  computed: {
    compCustomClass() {
      if (this.radioVal === "HTML") {
        return "HTML";
      } else if (this.radioVal === "CSS") {
        return "CSS";
      } else if (this.radioVal === "JavaScript") {
        return "JavaScript";
      }
      return "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.HTML {
  color: red;
}
.CSS {
  color: blue;
}
.JavaScript {
  color: purple;
}
</style>
