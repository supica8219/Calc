
update('')
if(localStorage.value)
update(localStorage.value)
setup_thema()
set_char_size()
//タイプ音読み込み
const sound = new Howl({
  src: ['./sound/type.mp3']
});
document.querySelectorAll(".button").forEach((button)=>{
  button.addEventListener("click",()=>{
    sound.play();
  });
});
function save_value(){
localStorage.value=document.querySelector('p').innerHTML
}
function update( _v ) // input tag を更新する関数
{
  document.querySelector( 'p' ).innerHTML = _v
}
function append( _v ) // 数字ボタンが押されたので数字を後ろに追加する
{
  document.querySelector( 'p' ).innerHTML += _v
}
function back(){
  document.querySelector('p').innerHTML=document.querySelector('p').innerHTML.slice(0,-1)
}
function save(){
  let v = document.querySelector( 'p' ).innerHTML
  localStorage.prev=v
  console.log(localStorage.prev)
}
function dump_save(){
  document.querySelector( 'p' ).innerHTML=localStorage.prev
}
function calc() // 「＝」ボタンが押されたので計算する
{
    let v = document.querySelector( 'p' ).innerHTML
    save()
    v=v.replace(/÷/g,'/').replace(/×/g,'*').replace(/\^/g,'**')
    console.log(v)
    try {
        const f = new Function( 'return ' + v )
        update( (Math.floor(f()*1000)/1000).toString() )
    } catch( _error ) {
        update("×") // 計算に失敗した場合は、そのエラーの内容を表示する
    }
    char_size()

}
function char_size(v){
  var p=document.querySelector('p')
  var px=Number(String(p.style.fontSize).replace("px",""))
  px=px+Number(v)
  p.style.fontSize=String(px)+"px"
  localStorage.charsize=String(px)+"px"
}
function set_char_size(){
  var p=document.querySelector('p')
  p.style.fontSize=localStorage.charsize
}
/*
機能関数
*/
function percent(){
  let v = document.querySelector( 'p' ).innerHTML
  v=v.replace(/÷/g,'/').replace(/×/g,'*')
  try {
      const f = new Function( 'return ' + v )
      update( (f()/100).toString() )
  } catch( _error ) {
      update("×") // 計算に失敗した場合は、そのエラーの内容を表示する
  }
}
function minus(){
  let v = document.querySelector( 'p' ).innerHTML
  v=v.replace(/÷/g,'/').replace(/×/g,'*')
  try {
      const f = new Function( 'return ' + v )
      update( (f()*(-1)).toString() )
  } catch( _error ) {
      update("×") // 計算に失敗した場合は、そのエラーの内容を表示する
  }
}
/*
ハンバーガーメニューの開閉
*/
function view_menu(){ //  ハンバーガーメニューを表示する
  var menu=document.getElementById("menu");var menu_button=document.getElementById("menu-button");
  menu.classList.add('active');menu_button.classList.add('panelactive');
}
function close_menu(){  //  ハンバーガーメニューを閉じる
  var menu=document.getElementById("menu");var menu_button=document.getElementById("menu-button");
  menu.classList.remove('active');menu_button.classList.remove('panelactive');
  close_option()
}
function view_option(){ //  オプションのハンバーガーメニューを表示する
  var menu=document.getElementById("option");var menu_button=document.getElementById("option-button");
  menu.classList.add('active');menu_button.classList.add('optionactive');
}
function close_option(){  //  オプションのハンバーガーメニューを閉じる
  var menu=document.getElementById("option");var menu_button=document.getElementById("option-button");
  menu.classList.remove('active');menu_button.classList.remove('optionactive');
}

function getObj(id){
  return document.getElementById(id.toString());
}
/*
キーボード取得
*/
document.addEventListener('keydown', keypress_ivent);
function keypress_ivent(e) {
    if(e.key=="Backspace"){
      sound.play()
      back()
    }
    else if(e.key=="Enter"){
      sound.play()
      calc()
    }
    else if(e.key=='Escape'){
      var menu=document.getElementById("menu");
      if(menu.classList.contains('active'))
      close_menu()
      else
      view_menu()
    }
    else if(e.key=="ArrowUp"){char_size("5");}else if(e.key=="ArrowDown"){char_size("-5");}
    else if(e.key=="Shift"||e.key=="Ctrl"||e.key=='Tab'){}
    else if(e.key=="*"){sound.play();append('×');}else if(e.key=='/'){sound.play();append('÷');}
    else if(e.key=='%'){sound.play();percent();}
    else if(e.key=='A'){sound.play();memoryA();}else if(e.key=='B'){sound.play();memoryB();}
    else if(e.key=='C'){sound.play();update('');}else if(e.key=='='){sound.play();calc();}
    else{
      sound.play()
      append(e.key);
    }
}
/*
ボタンクリック効果音
*/
//var se64="SUQzBAAAAAAAa1RQRTEAAAAKAAADT3RvTG9naWMAVElUMgAAABMAAANUcmFja3BhZDAxLTEoVGFwKQBUQUxCAAAADQAAA090b0xvZ2ljLVNFAFRTU0UAAAAPAAADTGF2ZjU4LjIwLjEwMAAAAAAAAAAAAAAA//NYAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAEAAAC9ABtbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW2enp6enp6enp6enp6enp6enp6enp6enp6ez8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz/////////////////////////////////8AAAAATGF2ZgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvR4v0ICAAAA//NIZIQAAAGkAKAAAAAAA0gBQAAATX6X3/5no/927//p+bYs2mnA4BE4BAIBAIBAIAANmvzIDDdktPuv2cuZeekOoBAAAYoBmQOZEz4ZwAMUA0ZUBgeK0IqRWu3hY+IwC2AjYG6gWUGJdR0vxHQNkBaYHkACABjAcpFkkWV/i4DMXALWG3gNABqht4czU9SV//NIZP8NfZEiAMPIAAnwBnb/gBBiX/D0w28QwQnFLkVGbPigx3kUEfpf6//8hwsgQDJQXAJzIwcBPC5BwF4cwnAhGIRQAAQIAwQBy44dwhwMGPAnnKPKTn+UT/vKf+Ud4O2Llm/p/ARV29crfgFaSgHRW0ZRrOHQMswkHw6WiiCghwqnGYtwYUbEkDCC0cQD//NIZOYS2VVpL8XQAQqITpJNgRAAUIAwUJhlgNBIDHyy8y80VFBfEbWGSQ9lRYKvqjabOTSKMfZ9YjHJ80/Vr7VehmMQAOFMtXMQQ19bPr+cxL/2rD+vV//Qp34CIh3//+vrDccsYCb0soHxLXdXI8vooh4PgCu5lHEiqpzokBKzVqXt51a1EiTY+hmfeGJ7//NIZKAJ3GtCy+KMAAkIBkpfwBAA7NhhTRAxsxl0bYUF1lmvER5osBSNBK4YPEoZQ8q47JSyOMIqgJGIkKfbbLm0yYUUsDzXIfZCO3Z5j7ss//7vZLc//9H/0s/s//SqgAI3TZ4r2ZXHZA4ZW7yteu1pqLIwl5xXAk0ck13HlMzJNTzjYaSfPl9GfynisFH2";
//const audio = new Audio("./sound/type.mp3");
//const  audio  =  new  Audio("data:audio/wav;base64," + se64);
/*
テーマ変更
*/

function setup_thema(){
  if(localStorage.thema=="white")
    change_white()
  else if(localStorage.thema=="black")
    change_black()
  else
    console.log("nullthema")
}
function change_white(){
  localStorage.thema = "white"
  //console.log(localStorage.thema)
  const btn = document.querySelectorAll('button')
  btn.forEach(button => {
    if(!button.classList.contains('b-orange')){
      button.style.backgroundColor="white";
      button.style.color="black";
    }
  })
}
function change_black(){
  localStorage.thema = "black"
  //console.log(localStorage.thema)
  const btn = document.querySelectorAll('button')
  btn.forEach(button => {
    if(!button.classList.contains('b-orange')){
      button.style.backgroundColor="rgb(43,43,43)";
      button.style.color="white";
    }
  })
}
function set_tbutton_color(v){
  console.log(v);
}



