<template>
	<section class="sec1">
		<h1 class="sec1__title--first">
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
		</h1>
		<h1 class="sec1__title--second">
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
		</h1>
	</section>
</template>

<script>
export default {
  name: 'TextScroll',
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

  .sec1__title--first {
    animation: anim--first 10s infinite linear 0.1s both;
  }

  .sec1__title--second {
    animation: anim--second 10s infinite linear 0.1s both;
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