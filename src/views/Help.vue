<template>
  <div>
    <h2>Help page</h2>
    {{ $route.query }}
    <div>
      <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
        <label class="form__label">Name</label>
        <input class="form__input" v-model.trim="$v.name.$model" ref="nameInput"/>
      </div>
      <div class="error" v-if="!$v.name.required">Field is required</div>
      <div class="error" v-if="!$v.name.minLength">
        Name must have at least {{ $v.name.$params.minLength.min }} letters.
      </div>
     
      <div class="form-group" :class="{ 'form-group--error': $v.age.$error }">
        <label class="form__label">Age</label>
        <input class="form__input" v-model.trim.lazy="$v.age.$model" />
      </div>
      <div class="error" v-if="!$v.age.between">
        Must be between {{ $v.age.$params.between.min }} and
        {{ $v.age.$params.between.max }}
      </div>
      <button @click="sendData">Send</button>
    </div>

    <!-- dinamik componenent -->
    <!-- <component :is="comp"/> -->
  </div>
</template>

<script>
import { required, minLength, between } from "vuelidate/lib/validators";
// import About from "@/views/About"
// import Profile from "@/views/Profile"

export default {
  name: "Help",
  data() {
    return {
      name: '',
      age: null
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(4),
    },
    age: {
      between: between(20, 30),
    },
    componentName: "About"
  },
  computed: {
    // // dinamik componenent
    // comp() {
    //   // component bu şekilde de import edilebilir.
    //   // const About = () => import(`@/views/${this.componentName}`)
    //   const About = () => import("@/views/About")
    //   if(this.name) {
    //     return About
    //   } else  {
    //     return Profile
    //   }
    // },
  },
  created() {
    // mesela sedece yetkililerin route'a erişmesi için kullanılabilir
    console.log(this.$route.query);
  },
  methods: {
    sendData() {
      this.$refs.nameInput.focus();
      console.log(this.$refs.nameInput.value);
    }
  },
};
</script>
