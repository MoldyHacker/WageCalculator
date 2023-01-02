<template>
  <v-app id="inspire">
    <v-app-bar color="primary">
      <v-container class="fill-height d-flex align-center container">
        <v-app-bar-nav-icon @click="drawer = !drawer"/>
        <v-toolbar-title><v-btn variant="plain" to="/home">{{ appName }}</v-btn></v-toolbar-title>
        <v-chip color="orange" to="/about">v{{appVersion}}-alpha</v-chip>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      color="secondary"
      permanent
    >
      <v-list nav dense>
        <v-list-item append-icon="mdi-home" title="Home" value="home" to="/home"></v-list-item>
        <v-list-item append-icon="mdi-help" title="About" value="about" to="/about"></v-list-item>
        <v-list-item append-icon="mdi-cog" title="Settings" value="settings" to="/settings"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="align-baseline container" style="width: 100vw">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import {version, productName} from '@/../package.json'
import {useDisplay} from 'vuetify'
export default {
  name: "MainLayout",
  data: () => ({ drawer: false, appVersion:version, appName:productName}),
  setup () {
    const { mdAndUp } = useDisplay()
    return { mdAndUp }
  }
}
</script>

<style scoped>
.container {
  max-width: 1024px;
  margin: auto;
}
</style>
