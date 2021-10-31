<template>
  <div>
    <div v-if="actorDetails">
      <h4>{{actorDetails.name}}</h4>
      <p v-if="actorDetails.miniBios">
        {{actorDetails.miniBios[0].text}}
      </p>
    </div>

  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "ActorDetails",
  computed: {
    ...mapState(["actorDetails"]),
  },
  mounted() {
    console.log(this.$route.params);
    if (this.$route.params.id) {
      this.getActorDetails(this.$route.params.id);
    }
  },
  methods: {
    ...mapActions(["getActorDetails"]),
  },
};
</script>

<style>
</style>