<template>
  <div id="character">
    <p>キャラクター紹介</p>
    <p>&lt;</p>
    <div class="chara_explain" v-for="chex in $store.state.character" :key="chex">
      <img :src="chex.face" alt="face" class="chara_face">
      <div class="chara_name">{{ chex.name }}</div>
      <img :src="chex.picture" alt="picture" class="chara_picture">
      <div class="chara_profile">{{ chex.profile}}</div>
    </div>
    <p>&gt;</p>
  </div>
</template>

<script>
let chara_change;
let rotate = 0;
let erase = 3;
export default {
  name: 'CharacterPage',
  mounted: ()=>{
    const chara_explain = document.getElementsByClassName("chara_explain");
    chara_change = setInterval(() => {
      chara_explain[rotate].style.display = "block";
      chara_explain[erase].style.display = "none";
      rotate++;
      erase++;
      if(rotate > 3){
        rotate = 0;
      }
      if(erase > 3){
        erase = 0;
      }
    }, 1000);
  },
  beforeUnmount:()=>{
    clearTimeout(chara_change);
  }

}
</script>

<style scoped>
#character{
  width: 80vw;
  height:500px;
  position:relative
}

.chara_explain{
  position:absolute;
	left: 50%;
	top: 50%;
  transition: 0.5s;
}

.chara_explain:nth-of-type(1){
  display:none;
}

.chara_explain:nth-of-type(2){
  display:none;
}

.chara_explain:nth-of-type(3){
  display:none;
}

.chara_explain:nth-of-type(4){
  display:none;
}
</style>
