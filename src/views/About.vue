<template>
<H5>About</H5>
  <v-chip color="orange" to="/about">v{{appVersion}}-alpha</v-chip>
</template>


<script lang="ts">
import {version, productName} from '@/../package.json'
import {useDisplay} from 'vuetify'
export default {
  name: "About",
  data: () => ({ drawer: false, appVersion:version, appName:productName}),
  setup () {
    const { mdAndUp } = useDisplay()
    return { mdAndUp }
  }
}
</script>

<style scoped>

</style>
