import { createRouter, createWebHistory } from 'vue-router'

const routes = [
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	scrollBehavior(to, from){
		if(to == from ){
			return{
				el: to.hash,
				behavior:'smooth'
			}
		}
		if(to.hash){
			return{
				el: to.hash,
				behavior:'smooth'
			}
		}
		return {
			x:0,y:0
		}
	}
})

export default router
