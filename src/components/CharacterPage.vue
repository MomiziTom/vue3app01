<template>
  <div id="character">
    <p class="item_name">キャラクター紹介</p>
    <img class="chara_faces" :src="faces.face" alt="face" v-on:click="face_select" v-for="faces in $store.state.character" :key="faces">
    <div id="carousel_line">
      <p class="carousel_button" v-on:click="carousel_minus">
        <span class="carousel_inner">&lt;</span>
      </p>
      <p class="carousel_button" v-on:click="carousel_plus">
        <span class="carousel_inner">&gt;</span>
      </p>
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
    chara_explain[i].style.zIndex = "-1";
    chara_faces[i].style.opacity = "0.5";
  }
}
function chara_disp_select(){
  chara_explain[chara_disp].style.opacity = "1";
  chara_explain[chara_disp].style.zIndex = "800";
  chara_faces[chara_disp].style.opacity = "1";
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
      chara_disp_select()
    },

    carousel_minus(){
      chara_disp_reset();
      chara_disp--
      if(chara_disp < 0){
        chara_disp = chara_explain.length - 1;
      }
      chara_disp_select()
    },

    face_select(event){
      chara_disp_reset();
      event.target.style.opacity = "1";
      for(let i = 0 ; i < chara_explain.length ; i++){
        if(chara_faces[i].style.opacity === event.target.style.opacity){
          chara_explain[i].style.opacity = "1";
          chara_explain[i].style.zIndex = "800";
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
  position:relative;
  z-index: 899;
  background-color: white;
  border-radius: 20px;
  margin: 5px;
  cursor: pointer;
}

#carousel_line{
  width:60vw;
  height:440px;
  margin:auto;
  display: flex;
  align-items:center;
	justify-content: space-between;
}

.carousel_button{
  position:relative;
  font-size: 50px;
  font-weight: 1000;
  z-index: 900;
  width:50px; height:50px;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
}

.carousel_inner{
  position:absolute;
  top:-17%; left:17%;
}

.chara_explain{
    width: 460px;
    height:750px;
    position:absolute;
    top: 130px; left: 50%;
    transform: translate(-50%,0);
    transition: 0.5s;
    background-color: rgb(160, 214, 172);
    border-radius: 20px;
  }

  .chara_name{
    background-color: white;
    width:40%;
    margin: auto;
    border-radius: 20px;
    border: 2px solid rgb(61, 167, 84);
  }

  .chara_picture{
    height:70%;
    background-color: white;
  }

  .chara_profile{
    background-color: white;
    width:90%;
    margin: auto;
    padding: 5px;
    border-radius: 20px;
    border: 2px solid rgb(61, 167, 84);
    text-align: left;
  }

/* pc表示*/
@media screen and (min-width:768px){
  .chara_faces{
    height:80px;
  }

  .chara_explain{
    width: 460px;
    height:750px;
    position:absolute;
    top: 130px; left: 50%;
    transform: translate(-50%,0);
    transition: 0.5s;
    background-color: rgb(160, 214, 172);
    border-radius: 20px;
  }

  .chara_name{
    background-color: white;
    width:40%;
    margin: auto;
    border-radius: 20px;
    border: 2px solid rgb(61, 167, 84);
  }

  .chara_picture{
    height:70%;
    background-color: white;
  }

  .chara_profile{
    background-color: white;
    width:90%;
    margin: auto;
    padding: 5px;
    border-radius: 20px;
    border: 2px solid rgb(61, 167, 84);
    text-align: left;
    font-size: 16px;
  }
}

/* タブレット表示*/
@media screen and (max-width:768px){
  .chara_faces{
    width:20%;
  }

  .chara_explain{
    width: 60%;
    height: 600px;
  }

  .chara_picture{
    height:55%;
    background-color: white;
  }

  .chara_profile{
    font-size: 14px;
  }
}

/* スマホ表示*/
@media screen and (max-width:480px){
}

</style>