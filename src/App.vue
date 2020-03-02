<template>
  <v-app>
    <v-navigation-drawer app v-if="$store.state.token">Hello</v-navigation-drawer>
    <!-- <v-app-bar app color="primary" dark v-if="$store.state.token">
      <div class="d-flex align-center">
        DOZN
      </div>
    </v-app-bar> -->

    <v-content>
      <router-view />
    </v-content>
    <!-- <v-footer app>Hello</v-footer> -->
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    //
  })
});
</script>

<style lang="scss" scope>
.v-navigation-drawer__content {
  background-color: var(--v-primary-base);
}
.v-content {
  background: var(--v-secondary-base);
}
</style>
