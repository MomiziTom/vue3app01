<template>
	<section class="sec1">
		<h1 class="sec1__title--first">
		</h1>
		<h1 class="sec1__title--second">
		</h1>
	</section>
</template>

<script>
let egs_text = `Elf Girl Shoot
	Elf Girl Shoot
	Elf Girl Shoot
	Elf Girl Shoot
	Elf Girl Shoot
	Elf Girl Shoot
	Elf Girl Shoot
	Elf Girl Shoot
`
let winsize = window.innerWidth;
const flow_text1 = document.getElementsByClassName("sec1__title--first");
	const flow_text2 = document.getElementsByClassName("sec1__title--second");

function text_longer(){
	for(let i = 0 ; i < flow_text1.length; i++){
		flow_text1[i].textContent = egs_text;
		flow_text2[i].textContent = egs_text;
	}
	winsize = window.innerWidth;
	if(winsize > 1251){
		egs_text = `Elf Girl Shoot
			Elf Girl Shoot
			Elf Girl Shoot
			Elf Girl Shoot
			Elf Girl Shoot
			Elf Girl Shoot
			Elf Girl Shoot
			Elf Girl Shoot
			Elf Girl Shoot
			Elf Girl Shoot
			Elf Girl Shoot
			Elf Girl Shoot
			Elf Girl Shoot
			Elf Girl Shoot
			Elf Girl Shoot
			Elf Girl Shoot
			Elf Girl Shoot
			Elf Girl Shoot
			Elf Girl Shoot
			Elf Girl Shoot
			Elf Girl Shoot
			Elf Girl Shoot
			Elf Girl Shoot
			Elf Girl Shoot
		`
	}else{
		egs_text = `Elf Girl Shoot
			Elf Girl Shoot
			Elf Girl Shoot
			Elf Girl Shoot
			Elf Girl Shoot
			Elf Girl Shoot
			Elf Girl Shoot
			Elf Girl Shoot
		`
	}

}	


export default {
  name: 'TextScroll',
  data:{
	
  }
  mounted: ()=>{
	text_longer();
	window.addEventListener('resize', text_longer);
  },
  beforeUnmount: ()=> {
    window.removeEventListener('resize', text_longer)
  }
}
</script>

<style scoped>
section{
	margin: 0 calc(50% - 50vw);
	background-color: rgb(255, 255, 255);
	border-top:2px solid rgb(61, 167, 84) ;
	border-bottom:2px solid rgb(61, 167, 84) ;
    display: flex;
}

.sec1 {
    width: 100%vw;
    overflow: hidden;
}

.sec1__title--first, .sec1__title--second {
    flex-shrink: 0;
	margin:0;
    width: auto;
    height: auto;
    display: inline-block;
	text-wrap: nowrap;
    white-space: nowrap;
    font-size: 20px;
}

@media screen and (min-width:1250px){
	.sec1__title--first {
			animation: anim--first 30s infinite linear 0.1s both;
	}

	.sec1__title--second {
			animation: anim--second 30s infinite linear 0.1s both;
	}
}

@media screen and (max-width:1250px){
	.sec1__title--first {
			animation: anim--first 10s infinite linear 0.1s both;
	}

	.sec1__title--second {
			animation: anim--second 10s infinite linear 0.1s both;
	}
}


@keyframes anim--first {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-100%);
  }
}

@keyframes anim--second {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-100%);
  }
}

</style>