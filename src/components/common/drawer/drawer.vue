<template>
  <v-navigation-drawer :right="$vuetify.rtl" :mini-variant.sync="mini" app absolute dark>
    <v-divider></v-divider>
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-img src="../../../assets/giapnt.jpg"></v-img>
      </v-list-item-avatar>
      <v-list-item-title>ジャップ</v-list-item-title>
    </v-list-item>
    <v-divider></v-divider>

    <v-list dense nav>
      <template v-for="item in computedItems">
        <v-list-item :key="item.title" :to="item.to" link>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        icon: "mdi-contacts",
        title: "Dashboard",
        to: "/views/dashboard",
      },
      {
        icon: "mdi-contacts",
        title: "Supliers Management",
        to: "/views/supliers",
      },
      {
        icon: "mdi-history",
        title: "Product Management",
        to: "/views/products",
      },
    ],
  }),

  computed: {
    mini: {
      get() {
        return this.$store.state.mini;
      },
      set(val) {
        this.$store.commit("toggleNavigation", val);
      },
    },
    computedItems() {
      return this.items.map(this.mapItem);
    },
  },

  methods: {
    mapItem(item) {
      return {
        ...item,
        children: item.children ? item.children.map(this.mapItem) : undefined,
        // title: this.$t(item.title),
      };
    },
  },
};
</script>