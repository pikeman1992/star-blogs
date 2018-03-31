<template>
  <div>
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
  <!-- <v-app v-else id="inspire">
    <v-content>

      <v-container fluid fill-height>

        <v-layout column align-center justify-center>

            <div class="login-logo">
              <img src="./assets/reedlogo-1.png" />
            </div>
            
            <div class="login-form-container">
              <v-form>
                <v-text-field v-model="loginForm.email" prepend-icon="person" name="email" label="Email" type="text"></v-text-field>
                <v-text-field v-model="loginForm.password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
              </v-form>
              <v-btn v-on:click="submitLogin" color="primary">Login</v-btn>
            </div>

        </v-layout>

      </v-container>
      
    </v-content>
  </v-app> -->

  </div>
  
  

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
      mainTitle: "",
      isLogin: false,

    };
  },
  props: {
    source: String
  },
  methods: {
    updateTitle(updateTitle) {
      this.mainTitle = updateTitle;
    },

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
.title i {
  font-size: 170%;
}
.app-footer {
  width: 100%;
  text-align: right;
  margin-right: 10px;
  margin-left: 10px;
}

.login-form-container {
  background-color: rgb(200, 200, 200);
  border-radius: 10px;
  width: 300px;
  padding: 10px;
}
</style>
