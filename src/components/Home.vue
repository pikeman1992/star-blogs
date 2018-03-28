<template>
  <div id="home">
    <div class="home-avatar">
      <img src="../assets/reedlogo-1.png" alt="avatar"/>
    </div>

    <h1>WELCOME TO HARRY'S PERSONAL BLOG</h1>

    <div class="divider"></div>

    <span>
      Nothing is true, everything is coding
    </span>

    <!-- <v-expansion-panel class="expansion-section">

      <v-expansion-panel-content v-for="(item,i) in 3" :key="i">
        
        <div slot="header">Item</div>
        
        <v-card>

            <v-card-text>

            </v-card-text>
        
        </v-card>
      </v-expansion-panel-content>

    </v-expansion-panel> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      whatIsList:[
        {
          title: "What is this?",
          content: "This is personal blog of Harry Nguyễn"
        }
      ],
    };
  },
  methods: {},
  computed: {},
  created() {}
};
</script>


<style scoped>
#home{
  text-align: center;
}
.home-avatar{
  
}
.home-avatar img{
  min-width:30%;
}
.expansion-section{
  margin-top: 20px;
}
.divider{
  margin-top: 20px;
  margin-bottom: 10px;
  height: 4px;
  background: brown;
  border-radius: 10px;
}
span{
 font-size: 150%;
 font-style: italic;
}
</style>
