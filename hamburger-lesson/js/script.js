$(function() {
  $('.menu-trigger').on('click', function(event) {//アイコンクリックされたら
    $(this).toggleClass('active');//classがactiveになったらアイコンが×になる
    $('#sp-menu').fadeToggle();//メニュー部分フェードイン
    event.preventDefault();
  });
});