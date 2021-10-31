<template>
  <div>
    <div v-if="movieDetails">
      <h4>{{ movieDetails.title }}</h4>
      <img v-if="movieDetails.image" :src="movieDetails.image.url" class="img-fluid" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";

export default {
  name: "MovieDetails",
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapState(["movieDetails"]),
  },
  created() {
    if (this.$route.params.id) {
      this.getMovieDetails({ data: this.$route.params.id, type: "add" });
    }
  },
  beforeDestroy() {
    this.getMovieDetails({ type: "del" });
  },
  methods: {
    ...mapActions(["getMovieDetails"]),
    ...mapMutations(["SET_MOVIE_DETAIL"]),
  },
};
</script>

<style>
</style>