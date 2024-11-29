<template>
  <div id="animation_parent">
    <p id="title_text">ELfGirlShoot</p>
    <div id="animation">

    </div>
  </div>
  <div id="to_play">
    <a href="https://5ricecakes.sakura.ne.jp/elfgirlshoot.html">遊んでみる</a>
  </div>
  <div id="home">
    <StoryPage />
    <InstructionsPage />
    <CharacterPage />
    <OthersPage />
  </div>
</template>

<script>
// @ is an alias to /src
import StoryPage from '@/components/StoryPage.vue'
import InstructionsPage from '@/components/InstructionsPage.vue'
import CharacterPage from '@/components/CharacterPage.vue'
import OthersPage from '@/components/OthersPage.vue'

let op_text_timer;
let op_timer;
function noscroll(e){e.preventDefault()}

export default {
  name: 'HomeView',
  components: {
    StoryPage,
    InstructionsPage,
    CharacterPage,
    OthersPage,
  },
  mounted: ()=>{
    const cover = document.getElementById("animation");
    const title_text = document.getElementById("title_text");
    if(location.hash === ""){
      document.addEventListener('wheel', noscroll, {passive: false});
      document.addEventListener('touchmove', noscroll, {passive: false});
      op_text_timer = setInterval(() => {
        if(title_text.textContent != "ELfGirlShoot...!"){
          title_text.textContent += ".";
        }
        if(title_text.textContent == "ELfGirlShoot...."){
          title_text.textContent = "ELfGirlShoot...!";
        }
      }, 1000);
      op_timer = setTimeout(() => {
        cover.style.opacity = "0";
        cover.style.zIndex="-999";
        title_text.style.opacity = "0";
        title_text.style.zIndex = "-998";
        title_text.style.scale = "4";
        document.removeEventListener('wheel', noscroll);
        document.removeEventListener('touchmove', noscroll);
      }, 5000);
  }else{
    cover.style.transition = "0s";
    cover.style.opacity = "0";
    cover.style.zIndex="-999";
    title_text.style.transition = "0s";
    title_text.style.opacity = "0";
    title_text.style.zIndex = "-998";
  }
  },
  beforeUnmount:()=>{
    clearTimeout(op_timer);
    clearTimeout(op_text_timer);
  }
}

</script>

<style scoped>
#title_text{
  padding:0; margin:0;
  text-align: left;
  width:570px;
  top:50%; left:50%;
  transform: translate(-50%, -50%);
  font-size: 80px;
  color:white;
  position: fixed;
  z-index: 999;
  transition:0.5s;
  transform-origin:top left;
}

#animation{
  width: 100%; height:100%;
  top:0; left:0;
  background-color: rgb(0, 0, 0);
  position: fixed;
  z-index: 998;
  transition: 0.5s;
}

#to_play{
  width:100%; height:400px;
}

#home{
  width: 80vw;
  margin:0 auto;
  background-color: rgb(37,133,57);
}

</style>