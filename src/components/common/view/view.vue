<template>
  <v-content>
    <!-- Header component -->
    <Header />
    <router-view />
    <Footer />
  </v-content>
</template>

<script>
// Include header component
import Header from "../header/header";
import Footer from "../footer/footer";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
