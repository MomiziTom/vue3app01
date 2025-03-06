<template>
	<section class="sec1" :style="{ width: text_width + 'px'}">
		<h1 class="sec1__title--first">
			{{ egs_text }}
		</h1>
		<h1 class="sec1__title--second">
			{{ egs_text }}
		</h1>
	</section>
</template>

<script>


export default {
  name: 'TextScroll',
  data(){
	return{
		egs_text : `Elf Girl Shoot
			Elf Girl Shoot
			Elf Girl Shoot
			Elf Girl Shoot
			Elf Girl Shoot
			Elf Girl Shoot
			Elf Girl Shoot
			Elf Girl Shoot
		`,
		text_width: 0,
	};
  },
  methods:{
	text_longer: function(){
		this.text_width = window.innerWidth - 9;
		console.log(this.text_width);
		if(window.innerWidth > 1250){
			this.egs_text = `Elf Girl Shoot
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
			this.egs_text = `Elf Girl Shoot
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
  },
  mounted: function(){
	this.text_longer();
	window.addEventListener('resize', this.text_longer);
  },
  beforeUnmount: function(){
    window.removeEventListener('resize', this.text_longer)
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
	width: 0;
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