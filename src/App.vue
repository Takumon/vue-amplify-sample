<template>
  <v-app>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import { components } from 'aws-amplify-vue'

export default {
  name: 'App',
  components: {
    ...components
  },
  data () {
    return {
    }
  }
}
</script>
