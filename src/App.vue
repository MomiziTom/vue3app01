<template>
   <span id="top"></span>
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
          <td><router-link to="/#story">ストーリーtab</router-link></td>
          <td><router-link to="/#instructions">操作説明tab</router-link></td>
          <td><router-link to="/#character">キャラクターtab</router-link></td>
          <td><router-link to="/#others">その他tab</router-link></td>
				</tr>
			</tbody>
    </table>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  position:fixed;
  top:20px; right:20px;
}

nav table{
  margin: auto 10px auto auto;

}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

@media screen and (min-width:768px){
	.display-tablet-phone{
		display:none;
	}
}

@media screen and (max-width:768px){
	.display-pc{
		display:none;
	}
}
@media screen and (max-width:480px){
}
</style>
