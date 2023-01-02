<template>
  <v-main>
    <v-app-bar
      color="primary"
      density="compact"
    >
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Photos</v-app-bar-title>

      <template v-slot:append>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-app-bar>

    <router-view />
  </v-main>
</template>

<script lang="ts" setup>
  //
</script>
