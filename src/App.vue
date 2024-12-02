<template>
   <div id="top"></div>
  <nav class="display-pc">
    <table>
      <tbody>
				<tr>
          <td><router-link to="/#top">トップへ戻る</router-link></td>
          <td><router-link to="/#story">ストーリー</router-link></td>
          <td><router-link to="/#instructions">操作説明</router-link></td>
          <td><router-link to="/#character">キャラクター</router-link></td>
          <td><router-link to="/#others">その他</router-link></td>
				</tr>
			</tbody>
    </table>
  </nav>
  <nav class="display-tablet-phone">
    <table>
      <tbody>
				<tr>
          <td><router-link to="/#top">トップへ戻る</router-link></td>
          <td><router-link to="/#story">ストーリー</router-link></td>
          <td><router-link to="/#instructions">操作説明</router-link></td>
          <td><router-link to="/#character">キャラクター</router-link></td>
          <td><router-link to="/#others">その他</router-link></td>
				</tr>
			</tbody>
    </table>
  </nav>
  <HomeView />
</template>

<script>
import HomeView from '@/views/HomeView.vue'

export default {
  components: {
    HomeView,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  background-color: white;
  border-radius: 20px 0 0 20px;
  border-top: 2px solid rgb(61, 167, 84);
  border-left: 2px solid rgb(61, 167, 84);
  border-bottom: 2px solid rgb(61, 167, 84);
  z-index: 950;
  position:fixed;
  padding-right: 20px;
  top:20px; right:0px;
}

nav table{
  padding: auto 10px auto auto;
}

nav a {
  font-weight: bold;
  color: rgb(19,67,29);
  text-decoration: none;
}

.item_name{
  background-color:white;
  margin:auto;
  width: 40%;
  border-radius: 20px;
}

.body_text{
  margin: auto; 
  text-align: left;
  width:90%
}

/* pc表示*/
@media screen and (min-width:768px){
	.display-tablet-phone{
		display:none;
	}
}

/* タブレット表示*/
@media screen and (max-width:768px){
	.display-pc{
		display:none;
	}
}

/* スマホ表示*/
@media screen and (max-width:480px){
  .item_name{
  width: 70%;
  }
}
</style>
