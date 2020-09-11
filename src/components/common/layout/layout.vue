<template>
  <v-app id="inspire">
    <!-- Drawer component -->
    <Drawer />
    <!-- Header component -->
    <ViewRouter />
    <!-- Header component -->
  </v-app>
</template>

<script>
// Include drawer component
import Drawer from "../drawer/drawer";
// import View router
import ViewRouter from "../view/view";
// Include header component
export default {
  components: {
    Drawer,
    ViewRouter,
  },
  data: () => ({}),
};
</script>
