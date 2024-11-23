import { createStore } from 'vuex'

export default createStore({
  state: {
    character: [
      {
        name: "シャララ",
        profile: "主人公のエルフの女の子。エルフの森の番人。弓使いの名手。<br>妹のルーヤとともにエルフの森を守護している。<br>無限に矢を補給できる不思議な弓「エルフギア」を持っている。<br>家族思いの強いエルフ。クールビューティ風だが頑固で朴念仁で不愛想なだけ。",
        face:require("@/assets/shalalaface.png"),
        picture:require("@/assets/shalala_chan.png"),
      },
      {
        name: "ルーヤ",
        profile: "シャララの妹。シャララと同じくエルフの女の子。結界魔法を使って森を守る。<br>姉のシャララとともにエルフの森を守護している。<br>未熟な番人のためシャララの半分以下の耐久値しかない弱々結界しか張れない。<br>臆病で泣き虫なお姉ちゃん子。ドジでのろまで押しに弱い。ただ、脱ぐとすごい。",
        face:require("@/assets/louyaface.png"),
        picture:require("@/assets/louya_chan.png"),
      },
      {
        name: "ゴブリン",
        profile: "野蛮な悪ガキ集団。森にあるエルフの秘宝の弓矢のうわさを聞きつけ森にやってきた。<br>集団で様々な動きを取りながら襲い掛かってくる。<br>一体一体は強くないが数で圧倒してくる。<br>みんな裸足なのでいつも足の裏を怪我している。靴を履け。",
        face:require("@/assets/goblinface.png"),
        picture:require("@/assets/goblin_chan.png"),
      },
      {
        name: "ハーピー",
        profile: "ずる賢い<ruby>翼腕<rt>よくわん</rt></ruby>の小娘たち。森にあるエルフの秘宝の弓矢のうわさを聞きつけ森にやってきた。<br>空から勢いよく襲い掛かってくる空のハンター。<br>素肌をさらしているくせに耐久力があり、矢が一発当たったぐらいではものともしない。<br>空を飛べない種族を小ばかにしている。鳥頭のくせに。",
        face:require("@/assets/harpyface.png"),
        picture:require("@/assets/harpy_chan.png"),
      },
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
