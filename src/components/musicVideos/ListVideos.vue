<template>
  <div id="list-video">

  <!-- <div class="video-container">
    <iframe width="100%" height="300px"
    src="https://www.youtube.com/embed/1vU7XqToZso?rel=0&amp;showinfo=0" 
    frameborder="0" allow="autoplay; 
    encrypted-media" allowfullscreen></iframe>

    <h1>Pacific Rim</h1>
    
    <h3>Actor: Harry Nguyễn</h3>  

  </div> -->

  <v-container grid-list-md>
    <v-layout row wrap>
  
      <v-flex xs12 sm6 lg4 v-for="(item,key) in videosList" :key="key">
        <v-card dark color="secondary">
           
           <div class="img-container">
             <img v-bind:src="'https://img.youtube.com/vi/'+ item.videoId +'/0.jpg'" />
           </div>

            <v-card-title class="card-title">
              
              <div class="title">
                <h4>{{item.title}}</h4>
                <h5>{{item.author}}</h5>
              </div>

              <v-btn flat icon  v-bind:to="'/videos/'+ item.id" router>
                <v-icon class="icon-play">play_circle_outline</v-icon>
              </v-btn>
              
            </v-card-title>

        </v-card>
      </v-flex>
      
    </v-layout>
  </v-container>
  
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      videosList:[],
    };
  },
  methods: {
    getVideoList(){
      this.$http
        .get("https://personal-d3408.firebaseio.com/videos.json")
        .then(res => {
          if(res.data == null){
            return;
          }
          return res.json();
        })
        .then(data => {
          for (let key in data) {
            data[key].id = key;
            data[key].videoId = this.getVideoId(data[key].url);
            this.videosList.push(data[key]);
          };
        });
    },
    getVideoId(videoUrl) {
      var url = videoUrl;
      var videoId = url.split("v=")[1];
      var ampersandPosition = videoId.indexOf("&");
      if (ampersandPosition != -1) {
        videoId = videoId.substring(0, ampersandPosition);
      }
      return videoId;
    }
  },
  computed: {},
  created() {
    this.getVideoList();
  }
};
</script>


<style scoped>
.video-container {
  max-width: 500px;
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
  width:80%;
}
.card-title .icon-play{
  font-size: 40px;

}
.img-container img {
  width: 100%;
}
</style>
