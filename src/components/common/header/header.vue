<template>
  <v-app-bar flat app color="cyan darken-3" dark>
    <v-btn icon @click.stop="setDrawer(!drawer)">
      <v-icon>mdi-menu-open</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-title class="hidden-sm-and-down font-weight-light" v-text="$route.name" />

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-bell</v-icon>
    </v-btn>
    <v-btn icon large>
      <v-avatar size="20px" item>
        <v-img src="https://cdn.vuetifyjs.com/images/logos/logo.svg" alt="Vuetify"></v-img>
      </v-avatar>
    </v-btn>
  </v-app-bar>
</template>
<script>
// Utilities
import { mapState, mapMutations } from "vuex";
export default {
  data: () => ({
    mini: false,
  }),
  computed: {
    ...mapState(["drawer"]),
  },
  methods: {
    ...mapMutations({
      setDrawer: "SET_DRAWER",
    }),
  },
};
</script>
