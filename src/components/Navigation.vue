<template>
  <div id="navigation">

    <div class="navigation_avatar">
      <v-avatar size="150px" tile="true">
        <img src="../assets/hammer.png" alt="avatar">
      </v-avatar>
    </div>

    <div class="navigation_title">
      <h2>{{authorName}}</h2>
    </div>

    <div class="list_container">
      <v-list  dense>

      <v-list-tile>
        <h3 class="list_title">Categories</h3>
      </v-list-tile>

      <template v-for="(item,key) in categories">

        <v-list-tile v-bind:key="key" @click="onChangeTitle(item.name)" v-bind:to="item.url" router> 
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{item.name}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </template>

      </v-list>

      <v-list dense>

        <v-list-tile>
          <h3 class="list_title">Others</h3>
        </v-list-tile>

        <template v-for="(item,key) in othersCat">
          <v-list-tile v-bind:key="key" @click="onChangeTitle(item.name)" v-bind:to="item.url" router> 
            <v-list-tile-action>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{item.name}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>

      </v-list>

    </div>

    

  </div>
</template>

<script>
export default {
  data() {
    return {
      authorName: "Harry Nguyễn",
      categories: [
        {
          name: "Home",
          icon: "home",
          url: "/"
        },
        {
          name: "Blog",
          icon: "book",
          url: "/blogs"
        },
        {
          name: "Video",
          icon: "video_library",
          url: "/videos"
        },
        {
          name: "Shopping",
          icon: "shopping_cart",
          url: "/shopping"
        },
        // {
        //   name: "My CV",
        //   icon: "assignment_ind",
        //   url: "/curriculumVitae"
        // }
      ],
      othersCat:[
         {
          name: "Share",
          icon: "share",
          url: "/1"
        },
         {
          name: "Evaluate",
          icon: "stars",
          url: "/2"
        },
         {
          name: "Settings",
          icon: "settings",
          url: "/3"
        }
      ]
    };
  },
  methods: {
    onChangeTitle(title) {
      console.log("click me",title);
      this.$emit("onClickChangeTitle", title);
    }
  },
  computed: {},
  created() {}
};
</script>


<style scoped>
.navigation_avatar {
  margin: 20px auto;
  text-align: center;
}
.navigation_title {
  margin-bottom: 20px;
  text-align: center;
}
.list_container {
  /* background-color: bisque; */
  border-top: 5px;
  border-top-style: solid;
}

.list_title {
  border-bottom: 1px;
  border-bottom-style: solid;
}
</style>
