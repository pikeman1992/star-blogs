<template>
  <v-app id="inspire">

    <v-navigation-drawer fixed v-model="drawer" app>

      <app-navigation v-on:onClickChangeTitle="updateTitle($event)"></app-navigation>
      

    </v-navigation-drawer>

    <v-toolbar color="indigo" dark fixed app>
      
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      
      <div class="title">
        <v-icon>account_circle</v-icon>
      </div>

    </v-toolbar>

    <v-content>

      <v-container>

        <router-view></router-view>

      </v-container>

    </v-content>

    <v-footer  color="indigo" app>
      <div class="app-footer">
        <span class="white--text">Star Blog - Copyright &copy; 2018</span>
      </div>
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
  text-align: right;
  width: 100%;
  margin-right: unset;
}
.title i{
  font-size: 170%;
}
.app-footer{
  width: 100%;
  text-align: right;
  margin-right: 10px;
  margin-left: 10px;
}
</style>
