<template>
  <v-app id="inspire">
    <!-- Header component -->
    <Header />
    <!-- Drawer component -->
    <Drawer />
    <!-- Header component -->
    <ViewRouter />
  </v-app>
</template>

<script>
// Include header component
import Header from "../header/header";
// Include drawer component
import Drawer from "../drawer/drawer";
// import View router
import ViewRouter from "../view/view";
// Include header component
export default {
  components: {
    Drawer,
    ViewRouter,
    Header,
  },
  data: () => ({}),
};
</script>
