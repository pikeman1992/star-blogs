<template>
  <v-app id="inspire">

    <v-navigation-drawer fixed v-model="drawer" app>

      <app-navigation v-on:onClickChangeTitle="updateTitle($event)"></app-navigation>
      

    </v-navigation-drawer>

    <v-toolbar color="indigo" dark fixed app>
      
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      
      <v-toolbar-title class="title">
        <h5>{{mainTitle}}</h5>
      </v-toolbar-title>

    </v-toolbar>

    <v-content>

      <v-container>

        <router-view></router-view>

      </v-container>

    </v-content>

    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>

  </v-app>
</template>

<script>
import Home from "./components/Home";
import ListBlogs from "./components/blogs/ListBlogs";
import Navigation from "./components/Navigation";

export default {
  components: {
    "app-home": Home,
    "app-navigation": Navigation,
    "app-list-blogs": ListBlogs
  },
  data() {
    return {
      drawer: null,
      mainTitle: ""
    };
  },
  props: {
    source: String
  },
  methods: {
    updateTitle(updateTitle) {
      this.mainTitle = updateTitle;
    }
  },
  computed: {},
  created() {}
};
</script>

<style>
.title {
  width: 100%;
  text-align: right;
}
</style>
