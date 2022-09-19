<!DOCTYPE html>
<meta charset="UTF-8">
<html>
<head>
    <meta charset="UTF-8" />
    <title>計算機WEBアプリ</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="styles.css"rel="stylesheet"/>
    <link rel="shortcut icon" href="img/favicon.ico">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <link rel="apple-touch-icon" href="img/icon-192x192.png" sizes="192x192">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-title" content="Calc">
    <link rel="manifest" href="https://calcspeed.com/manifest.json?data=1146">
    <script>
    navigator.serviceWorker.register('https://calcspeed.com/service-worker.js').then(function(registration){
        console.log("Service Worker is registered!!");
    });
    </script>
</head>
<body>
    <span class="material-icons menu-button" id="menu-button"onclick="view_menu()">menu-open</span>
    <div class="hamburger-menu" id="menu">
        <ul>
          <li><a href="#" onclick="close_menu()"><span class="material-icons"style="font-size:20px;">close</span>閉じる</a></li>
          <li><a href="#"><span class="material-icons"style="font-size:20px;">label</span>電卓1</a></li>
          <li><a href="#"><span class="material-icons"style="font-size:20px;">label</span>電卓2</a></li>

        </ul>
    </div>
    <input class="answer" />
    <div class="button-area">
        <button class="button"onclick="update( '' ) ">C</button>
        <button class="button" onclick="append( '**0.5' )">√</button>
        <button class="button" onclick="append( '**' )">^</button>
        <button class="button b-orange" onclick="append( '/' )">÷</button>
        <button class="button" onclick="append( '7' )">7</button>
        <button class="button" onclick="append( '8' )">8</button>
        <button class="button" onclick="append( '9' )">9</button>
        <button class="button b-orange" onclick="append( '*' )">×</button>
        <button class="button" onclick="append( '4' )">4</button>
        <button class="button" onclick="append( '5' )">5</button>
        <button class="button" onclick="append( '6' )">6</button>
        <button class="button b-orange" onclick="append( '-' )">-</button>
        <button class="button" onclick="append( '1' )">1</button>
        <button class="button" onclick="append( '2' )">2</button>
        <button class="button" onclick="append( '3' )">3</button>
        <button class="button b-orange" onclick="append( '+' )">+</button>
        <button class="button" onclick="append( '0' )">0</button>
        <button class="button" onclick="append( '.' )">.</button>
        <button class="button" onclick="back()">←</button>
        <button class="button b-orange"onclick="calc()">=</button>
    </div>
<script>
function update( _v ) // input tag を更新する関数
{
    document.querySelector( 'input' ).value = _v
}

function append( _v ) // 数字ボタンが押されたので数字を後ろに追加する
{
    document.querySelector( 'input' ).value += _v
}
function back()//　戻るボタンが押されたので数字を一つ後ろから消す
{
    document.querySelector('input').value=document.querySelector('input').value.slice(0,-1)
}
function calc() // 「＝」ボタンが押されたので計算する
{
    const v = document.querySelector( 'input' ).value
    try {
        const f = new Function( 'return ' + v )
        update( f().toString() )
    } catch( _error ) {
        update( _error ) // 計算に失敗した場合は、そのエラーの内容を表示する
    }
}
function view_menu(){ //  ボタンが押されたのでハンバーガーメニューを表示する
  var menu=document.getElementById("menu");var menu_button=document.getElementById("menu-button");
  menu.classList.add('active');menu_button.classList.add('panelactive');
}
function close_menu(){  //  ボタンが押されたのでハンバーガーメニューを閉じる
  var menu=document.getElementById("menu");var menu_button=document.getElementById("menu-button");
  menu.classList.remove('active');menu_button.classList.remove('panelactive');
}

/* ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
          オリジナル関数
　ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
*/
function divisor() {  //  公約数の数を返す　割れる場合にカウントする
  const n = document.querySelector( 'input' ).value
  let c=n,count=1
  if(n <= 0) return
  while(c--) {
    if(n%c === 0) count++
  }
  update(count.toString());
}

</script>
</body>
</html>