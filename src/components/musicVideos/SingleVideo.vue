<template>
  <div id="single-video">

  <div class="video-container">
    <iframe width="100%" height="300px"
    v-bind:src="'https://www.youtube.com/embed/' + this.video.videoUrl + '?rel=0&amp;showinfo=0'" 
    frameborder="0" allow="autoplay; 
    encrypted-media" allowfullscreen></iframe>

    <h1>{{this.video.title}}</h1>
    
    <h3>{{this.video.author}}</h3>  

  </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      video: {}
    };
  },
  methods: {
    getVideoId(videoUrl) {
      var url = videoUrl;
      var videoId = url.split("v=")[1];
      var ampersandPosition = videoId.indexOf("&");
      if (ampersandPosition != -1) {
        videoId = videoId.substring(0, ampersandPosition);
      }
      return videoId;
    },
    getSingleBlog(){
      this.$http
      .get("https://personal-d3408.firebaseio.com/videos/" + this.id + ".json")
      .then(res => {
        return res.json();
      })
      .then(data => {
        data.videoUrl = this.getVideoId(data.url);
        this.video = data;
        console.log(this.video);
      });
    }
  },
  computed: {},
  created() {
    this.getSingleBlog();
  }
};
</script>


<style scoped>
.video-container {
  max-width: 600px;
  margin: auto;
  background-color: rgb(211, 211, 211);
  padding: 10px;
}
.card-title {
  justify-content: space-between;
}

.card-title .title{
  align-items: start;
  display: flex;
  flex-direction: column;
  width:70%;
}
.card-title .icon-play{
  font-size: 40px;

}
.img-container img {
  width: 100%;
}
</style>
