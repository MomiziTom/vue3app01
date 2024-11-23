<template>
  <div id="animation_parent">
    <div id="animation">

    </div>
  </div>
  <div class="home">
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
    if(location.hash === ""){
      document.addEventListener('wheel', noscroll, {passive: false});
      document.addEventListener('touchmove', noscroll, {passive: false});
      op_timer = setTimeout(() => {
        cover.style.opacity = "0";
        cover.style.zIndex="-999";
        document.removeEventListener('wheel', noscroll);
        document.removeEventListener('touchmove', noscroll);
      }, 2000);
  }else{
    cover.style.transition = "0s";
    cover.style.opacity = "0";
    cover.style.zIndex="-999";
  }
  },
  beforeUnmount:()=>{
    clearTimeout(op_timer);
  }
}

</script>

<style scoped>
#animation{
  width: 100%; height:100%;
  left:0; top:0;
  background-color: black;
  position: fixed;
  z-index:999;
  transition: 0.5s;
}
</style>