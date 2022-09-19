var memory_A,memory_B;
var flags=new Array();
for(var i=0;i<20;i++)
if(localStorage.getItem('memory'+i))
flags[i].push=true
else
flags[i].push=false
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