function displayUnit(val){
    document.getElementById("display").value= document.getElementById("display").value + val;
}

function Clearall(){
    document.getElementById("display").value="";
}

function Calcilatevalue(){
    var Getinput=document.getElementById("display").value;
    var result = eval(Getinput);
    document.getElementById("display").value = result;
}