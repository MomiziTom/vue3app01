<template>
  <div id="instructions">
    <p class="item_name">操作説明</p>
    <div>
      <div>
        会話パート
      </div>
      <img src="@/assets/conversation.png" alt="会話パート" class="picture_big">
      <div class="body_text">
        偵察に向かったルーヤがシャララの元に戻ってきてどんな敵がやってくるか伝えてくれます。
        画面クリックで会話を進めてストーリーを進行させてください。
      </div>
    </div>
    <div>
      <div>
        戦闘パート
      </div>
      <div>
        <img src="@/assets/encount.png" alt="戦闘シーン" class="picture_big">
      </div>
      <div class="body_text">
        画面右側からモンスターがやってきます。弓矢を使ってモンスターを撃退しましょう。すべてのモンスターを撃退するとステージクリアとなります。
      </div>
      <div>
        <img src="@/assets/numbered.png" alt="番号付き説明" class="picture_big">
      </div>
      <div class="body_text">
        ①画面上部にシャララが発射できる弓矢の本数が表示されます。<br>
        ②画面下部のハートマークがシャララの耐久値です。敵と接触すると１つずつハートが減り、０になるとゲームオーバーになります。<br>
        ③画面下部のシールドマークはルーヤの結界の耐久値です。敵が画面左端まで移動するとシールドが１つずつ減り、０になるとゲームオーバーになります。<br>
        ④シャララの位置です。この位置から矢が発射されます。<br>
        ⑤マウスポインターの位置です。この位置を目掛けて矢が発射されます。<br>
        ⑥敵モンスターです。様々な動きのモンスターが攻めてきます。モンスターはシャララに体当たりしたり森に向かってきます。接触される前に撃退しましょう。
      </div>
      <div>
        <img src="@/assets/ready.png" alt="準備" class="picture_small">
      </div>
      <div class="body_text">
        画面内にマウスポインターの黒い丸が表示された状態でマウスの左クリックを押しっぱなしにするとシャララが弓矢を構え、矢の発射体制に入ります。<br>
        左クリックを放すと矢が発射されます。
      </div>
      <div class="body_text">
        矢は発射パワーの強さに応じて飛ぶ勢いが変わります。
      </div>
      <div class="body_text">
        左クリックを押しっぱなしにし続けると矢の発射パワーがチャージされます。<br>
        パワーをチャージし始めると黒丸が小さくなります。
      </div>
      <div>
        <img src="@/assets/readyshoot.png" alt="発射用意" class="picture_small">
      </div>
      <div class="body_text">
        それから徐々に黒丸の大きさが拡大し、チャージが最大になると黒丸の拡大も止まります。
      </div>
      <div>
        <img src="@/assets/charge.png" alt="チャージ" class="picture_small">
      </div>
      <div class="body_text">
        チャージが最大の時に矢を発射するとマウスポインターの位置へ勢いよく矢が飛んでいきます。
      </div>
      <div>
        <img src="@/assets/shoot.png" alt="発射" class="picture_big">
      </div>
      <div class="body_text">
        シャララをクリックすると矢を補給できます。<br>
        矢を発射すると画面上部の矢の数が１本ずつ減っていきます。<br>
        この矢が０になると弓を構えても矢を発射することができません。<br>
        矢が発射できなくならないよう、適度に矢を補給しましょう。
      </div>
      <div>
        <img src="@/assets/remain.png" alt="残弾" class="picture_big">
      </div>
      <div>
        <img src="@/assets/shalalaclick.png" alt="残弾" class="picture_exsmall">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InstructionsPage',
}
</script>

<style scoped>
.picture_big{
  width: 90%;
}

.picture_small{
  width: 40%;
}

</style>
