<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar class="form-title" flat>
            <v-toolbar-title>Login form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field class="text-field" label="Login" name="login" prepend-icon="mdi-account" type="text" />
              <v-text-field
                class="text-field"
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary darken-1" @click="login">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  mounted: function() {
    this.$store.state.token = "";
  },
  methods: {
    login: function() {
      this.$store.state.token = "1234";
      this.$router.push("/");
      return;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  background: var(--v-primary-base);
  .v-toolbar {
    background: var(--v-primary-darken1);
    color: var(--v-secondary-base);
  }
  .v-card {
    background: var(--v-secondary-base);
  }
  .v-btn {
    color: var(--v-secondary-base);
  }
}
</style>
