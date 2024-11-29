<template>
  <div id="character">
    <p class="item_name">キャラクター紹介</p>
    <img class="chara_faces" :src="faces.face" alt="face" v-on:click="face_select" v-for="faces in $store.state.character" :key="faces">
    <div id="carousel_line">
      <p class="carousel_button" v-on:click="carousel_minus">&lt;</p>
      <p class="carousel_button" v-on:click="carousel_plus">&gt;</p>
    </div>
    <div class="chara_explain" v-for="chex in $store.state.character" :key="chex">
      <div class="chara_name">{{ chex.name }}</div>
      <img class="chara_picture" :src="chex.picture" alt="picture">
      <div class="chara_profile" v-html="chex.profile"></div>
    </div>
  </div>
</template>

<script>
let chara_disp = 0 ;
const chara_explain = document.getElementsByClassName("chara_explain");
const chara_faces = document.getElementsByClassName("chara_faces");
function chara_disp_reset(){
  for(let i = 0 ; i < chara_explain.length ; i++){
    chara_explain[i].style.opacity = "0";
    chara_faces[i].style.opacity = "0.5";
  }
}

export default {
  name: 'CharacterPage',
  methods:{

    carousel_plus(){
      chara_disp_reset();
      chara_disp++
      if(chara_disp >= chara_explain.length){
        chara_disp = 0;
      }
      chara_explain[chara_disp].style.opacity = "1";
      chara_faces[chara_disp].style.opacity = "1";
    },

    carousel_minus(){
      chara_disp_reset();
      chara_disp--
      if(chara_disp < 0){
        chara_disp = chara_explain.length - 1;
      }
      chara_explain[chara_disp].style.opacity = "1";
      chara_faces[chara_disp].style.opacity = "1";
    },

    face_select(event){
      chara_disp_reset();
      event.target.style.opacity = "1";
      for(let i = 0 ; i < chara_explain.length ; i++){
        if(chara_faces[i].style.opacity === event.target.style.opacity){
          chara_explain[i].style.opacity = "1";
          chara_disp = i;
          break;
        }
      }
    }
  },
  mounted: ()=>{
    for(let i = 0 ; i < chara_explain.length ; i++){
      chara_explain[i].style.opacity = "0";
      chara_explain[i].style.transition = "0.5s";      
      chara_faces[i].style.opacity = "0.5";
      chara_faces[i].style.transition = "0.5s";      
    }
    chara_explain[chara_disp].style.opacity = "1";
    chara_faces[chara_disp].style.opacity = "1";
  },
}
</script>

<style scoped>
#character{
  height:920px;
  position:relative;
}

.chara_faces{
  width:128; height:80px;
}

#carousel_line{
  width:50vw;
  height:440px;
  margin:auto;
  display: flex;
  align-items:center;
	justify-content: space-between;
}

.carousel_button{
  font-size: 50px;
  font-weight: 1000;
}

.chara_explain{
  height:750px;
  position:absolute;
	top: 130px; left: 50%;
  transform: translate(-50%,0);
  transition: 0.5s;
}

</style>
