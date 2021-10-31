<template>
  <div>
    <h3>Search Movie</h3>
    <div class="d-flex">
      <input v-model="searchValue" class="form-control" type="text" />
      <button class="btn btn-primary" @click="search">Search</button>
    </div>
    <p>Movie Number: {{ searchTypeMovie }}</p>
    <p>Favorites Number: {{ favNumber }}</p>
    <div v-if="loading">loading...</div>
    <div v-else>
      <div class="d-flex flex-wrap" v-if="searchResults.length">
        <div
          v-for="(movie, i) in searchResults"
          :key="i"
          class="card shadow-sm m-1"
        >
          <div class="d-flex justify-content-end">
            <button
              class="btn btn-outline-danger"
              @click="setFavorite(movie.fav ? 'del' : 'add', movie)"
            >
              <i class="fa-heart" :class="movie.fav ? 'fas' : 'far'"></i>
            </button>
          </div>

          <h2>{{ movie.title }}</h2>
          <h3 class="text-muted">{{ movie.titleType }}</h3>
          <button @click="goDetails(movie.id)">
            Details
          </button>
          <ul>
            <li
              v-for="principle,i in movie.principals"
              :key="i" 
              @click="goActorPage(principle.id)"
            >
              {{ principle.name }}
            </li>
          </ul>
          <img
            class="img-fluid rounded"
            v-if="movie.image"
            :src="movie.image.url"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "SearchMovie",
  data() {
    return {
      searchValue: "",
      loading: false,
    };
  },
  computed: {
    ...mapGetters(["searchTypeMovie", "favNumber"]),
    ...mapState(["searchResults"]),
  },
  beforeRouteLeave(to, from, next) { // update, enter, leave
    this.SET_MOVIE_DETAIL({type: "del"})
    next()
  },
  mounted() {
    if (this.$route.query.title) {
      this.searchValue = this.$route.query.title;
      this.loading = true;
      this.searchMovieTitle(this.searchValue).finally(() => {
        this.loading = false;
      });
    }
  },
  methods: {
    ...mapActions(["searchMovieTitle"]),
    ...mapMutations(["SET_FAV_MOVIES", "SET_MOVIE_DETAIL"]),
    search() {
      // this.$store.dispatch("searchMovieTitle", this.searchValue);
      this.$router.push({
        name: "SearchMovie",
        query: { title: this.searchValue },
      });
      this.loading = true;
      this.searchMovieTitle(this.searchValue).finally(() => {
        this.loading = false;
      });
    },
    setFavorite(type, movie) {
      this.SET_FAV_MOVIES({ type, movie });
    },
    goDetails(id) {
      const ID = id.split("/")
      this.$router.push({
        name: "movie-detail",
        params: {
          id: ID[ID.length - 2]
        },
      });
    },
    goActorPage(id) {
      // const ID = id.split("/")
      console.log(id);
      this.$router.push({
        path: "actor" + id,
      });
    },
  },
};
</script>

<style>
.card {
  padding: 1rem;
  border: 1px solid rgba(128, 128, 128, 0.623);
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 20rem;
}
</style>