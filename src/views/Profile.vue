<template>
  <div>
    <h2>Profile page</h2>
    <form>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="adres">Adres</label>
          <input
            type="text"
            class="form-control"
            :class="isStreetValid ? 'bg-success' : 'bg-danger'"
            id="adres"
            v-model="address.street"
          />
          <small v-show="!isStreetValid">Adres girin</small>
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">Password</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword4"
            placeholder="Password"
          />
        </div>
      </div>
      <div class="form-group col-md-6">
        <label for="inputAddress">Address</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder="1234 Main St"
        />
      </div>
      <div class="form-group col-md-6">
        <label for="inputAddress2">Address 2</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress2"
          placeholder="Apartment, studio, or floor"
        />
      </div>
      <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck" />
          <label class="form-check-label" for="gridCheck"> Check me out </label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Sign in</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      address: {
        street: ""
      },
    }
  },
  computed: {
    isStreetValid() {
      // if(this.address.street === "") {
      //   return null
      // }
      return this.address.street.length > 5
    },
  },
  methods: {},
};
</script>
