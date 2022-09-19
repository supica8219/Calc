var memory_A,memory_B;
var flag_A=false,flag_B=false;
//メモリーボタンAを取得し、フラグflag_Aによってmemory_Aから値を出し入れする。
function memoryA(){
    var buttonA=document.getElementById("memoryA");
    if(flag_A==true){
        append(memory_A.toString());
        memory_A=null;
        flag_A=false;
        buttonA.innerHTML='A';
        buttonA.classList.remove("b-blue");
    }else{
        memory_A= document.querySelector( 'p' ).innerHTML;
        update('');
        flag_A=true;
        buttonA.innerHTML=memory_A;
        buttonA.classList.add("b-blue");
    }
}
function memoryB(){
    var buttonB=document.getElementById("memoryB");
    if(flag_B==true){
        append(memory_B.toString());
        memory_B=null;
        flag_B=false;
        buttonB.innerHTML='B';
        buttonB.classList.remove("b-blue");
    }else{
        memory_B= document.querySelector( 'p' ).innerHTML;
        update('');
        flag_B=true;
        buttonB.innerHTML=memory_B;
        buttonB.classList.add("b-blue");
    }
}