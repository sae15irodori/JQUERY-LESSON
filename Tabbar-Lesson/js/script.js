$('#tab-contents .tab[id != "tab1"]').hide();//初期設定としてTAB1のみ表示するそれ以外は非表示にする

$('#tab-menu a').on('click', function(event) {//tab-menu aタグがクリックされたら
  $("#tab-contents .tab").hide();             //tab-contentsのtabを全て一旦非表示にする
  $("#tab-menu .active").removeClass("active");//タブ切り替え時に既存のactiveクラスを削除する
  $(this).addClass("active");                 //切り替え後のタブのｸﾗｽにactiveを追加する(背景と文字色変わる)
  $($(this).attr("href")).show();             //タブがクリックされた時にhref属性を取得し表示する
  event.preventDefault();
});