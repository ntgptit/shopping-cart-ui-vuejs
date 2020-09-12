<template>
  <v-main>
    <router-view />
    <Footer />
  </v-main>
</template>

<script>
import Footer from "../footer/footer";
export default {
  components: {
    Footer,
  },
};
</script>
