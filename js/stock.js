//localStorageにmemnが入っていない
function mem_stock(n){
    p= document.querySelector( 'p' )
    if(p.innerHTML=='')return;
    localStorage.setItem('mem'+String(n),p.innerHTML);
    document.querySelector('#mem'+String(n)).innerHTML=p.innerHTML
    p.innerHTML=''
}
//localStorageにmemnが入っている
function mem_dump(n){
    document.querySelector( 'p' ).innerHTML=localStorage.getItem('mem'+String(n));
    document.querySelector('#mem'+String(n)).innerHTML='<span class="material-icons">inventory_2</span>'
    localStorage.removeItem('mem'+String(n));
}
function huriwake(n){
    console.log(n);
    if(localStorage.getItem('mem'+String(n)))
    mem_dump(n);
    else
    mem_stock(n);
}
function hanbetu(){
    for(var n=1;n<25;n++){
        if(localStorage.getItem('mem'+String(n))&&document.querySelector('#mem'+String(n))){
            var p=document.querySelector('#mem'+String(n))
            p.innerHTML=localStorage.getItem('mem'+String(n))
        }
        else{
            //document.querySelector('#mem'+String(n)).style.backgroundColor="white"
        }
    }
}
hanbetu();