<template>
  <div id="list-blogs">
    
    <v-container class="search-box">
      <v-text-field v-model="search" label="Search" single-line></v-text-field>
    </v-container>

    <v-container class="list-blogs-container" wrap grid-list-md text-xs-center>
      <v-layout row wrap>
        
        <template v-if="!isBlogs">
          <h1>No Blog to show!</h1>
        </template>
        <template v-else>
          
          <v-flex xs12 sm6 lg4 v-for="(item,key) in filteredBlogs" v-bind:key="key">
            <v-card>
        
              <v-card-media v-bind:src="item.imgUrl" height="200px">
              </v-card-media>

              <v-card-title class="card-title">
                <h2>{{item.title}}</h2>
                <article>{{item.subTitle | snippet}}</article>
              </v-card-title>

              <v-card-actions class="card-action">
                <v-btn flat color="blue" v-bind:to="'/blogs/'+ item.id" router>Read</v-btn>
                <v-btn flat color="blue">Share</v-btn>
              </v-card-actions>

            </v-card>
          </v-flex>

        </template>
        

      </v-layout>
    </v-container>

  </div>
</template>

<script>
export default {
  data() {
    return {
      blogsList: [],
      search: "",
      isBlogs: false
    };
  },
  methods: {
    getBlogsList() {
      this.$http
        .get("https://personal-d3408.firebaseio.com/posts.json")
        .then(res => {
          if(res.data == null){
            return;
          }
          this.isBlogs = true;
          return res.json();
        })
        .then(data => {
          for (let key in data) {
            data[key].id = key;
            this.blogsList.push(data[key]);
            //console.log(data);
          }
        });
    }
  },
  computed: {
    filteredBlogs() {
      return this.blogsList.filter(res => {
        return res.title.match(this.search);
      });
    }
  },
  created() {
    this.getBlogsList();
  }
};
</script>


<style scoped>
#list-blogs {
  /* background-color: green; */
}
.search-box{
  padding: unset;
  max-width:500px;
}
.card-title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.card-title h2 {
  margin-bottom: 10px;
}
.card-action {
  display: flex;
  justify-content: space-between;
}
.card {
  margin-bottom: 20px;
}
</style>
