<template>
  <div id="single-blog">

      <div class="image-container">
        <img v-bind:src="blog.imgUrl" />
      </div>

      <h1>{{blog.title}}</h1>

      <div class="author">
        <h2>Author: </h2>
        <h3>{{blog.author}}</h3>
      </div>

      <v-flex xs12>

        <h2>Categories: </h2>

          <template v-for="(item,key) in blog.categories">
            <v-chip v-bind:key="key">{{item}}</v-chip>
          </template>
        </v-flex>

        <v-divider class="my-3"></v-divider>

      <p>
        {{blog.content}}
      </p>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  methods: {
    getSingleBlog(){
      this.$http
      .get("https://personal-d3408.firebaseio.com/posts/" + this.id + ".json")
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.blog = data;
      });
    }
  },
  computed: {

  },
  created() {
    this.getSingleBlog();
  }
};
</script>


<style scoped>
#single-blog{
  margin: auto;
  max-width: 400px;
}
.image-container img {
  width: 100%;
}
h1 {
  text-align: center;
}
.author{
  display: flex;
  align-items: flex-end;
}
.author h3{
  margin-left: 10px;
}
</style>
