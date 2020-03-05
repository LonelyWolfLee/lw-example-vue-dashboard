<template>
  <v-container class="py-0" style="height:100%;">
    <v-row class="text-center primary darken-2" style="height:12%;">
      <v-col cols="12">
          <span class="display-1 font-weight-bold secondary--text">DOZN</span>
      </v-col>
      <v-col cols="12">
          <span class="font-weigth-bold secondary--text">userName</span>
      </v-col>
    </v-row>
    <v-row class="text-center" style="height:76%;">
      <v-col cols="12" class="mt-8">
        <div class="title my-2 secondary--text hover">프로필 관리</div>
        <div class="title my-2 secondary--text hover">휴가 관리</div>
        <div class="title my-2 secondary--text hover">설정</div>
      </v-col>
    </v-row>
    <v-row class="d-flex align-center primary darken-3" style="height:12%;">
      <v-col cols="12" class="hover">
        <h2 class="headline text-center font-weight-medium secondary--text">LOGOUT</h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
export default {
  name: "Bar"
};
</script>

<style lang="scss" scoped>
.hover:hover {
  opacity:0.5
}


</style>
