<template>
  <v-navigation-drawer
    v-model="drawer"
    :clipped="$vuetify.breakpoint.lgAndUp"
    :mini-variant.sync="mini"
    permanent
    app
  >
    <v-divider></v-divider>
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
      </v-list-item-avatar>
      <v-list-item-title>ジャップ</v-list-item-title>
      <v-btn icon @click.stop="mini = !mini">
        <v-icon>mdi-menu-open</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider></v-divider>
    <!-- <template v-slot:img="props">
      <v-img :gradient="`to bottom, ${barColor}`" v-bind="props" />
    </template>-->

    <!-- <v-divider class="mb-1" /> -->
    <v-list dense nav>
      <template v-for="item in computedItems">
        <v-list-group
          v-if="item.children"
          :key="item.title"
          v-model="item.model"
          :prepend-icon="item.model ? item.icon : item['icon-alt']"
          append-icon
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="(child, i) in item.children" :key="i" link>
            <v-list-item-action v-if="child.icon">
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ child.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-item v-else :key="item.title" link>
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
  props: {
    source: String,
  },
  data: () => ({
    drawer: true,
    mini: false,
    items: [
      {
        icon: "mdi-contacts",
        title: "Contacts",
        to: "../../views/supliers/suplier.vue",
      },
      { icon: "mdi-history", title: "Frequently contacted" },
      { icon: "mdi-content-copy", title: "Duplicates" },
      {
        icon: "mdi-chevron-up",
        // "icon-alt": "mdi-chevron-down",
        title: "Labels",
        // model: false,
        // children: [{ icon: "mdi-plus", title: "Create label" }],
      },
      {
        icon: "mdi-chevron-up",
        // "icon-alt": "mdi-chevron-down",
        title: "More",
        // model: false,
        // children: [
        //   { title: "Import" },
        //   { title: "Export" },
        //   { title: "Print" },
        //   { title: "Undo changes" },
        //   { title: "Other contacts" },
        // ],
      },
      { icon: "mdi-cog", title: "Settings" },
      { icon: "mdi-message", title: "Send feedback" },
      { icon: "mdi-help-circle", title: "Help" },
      { icon: "mdi-cellphone-link", title: "App downloads" },
      { icon: "mdi-keyboard", title: "Go to the old version" },
    ],
  }),

  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("SET_DRAWER", val);
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