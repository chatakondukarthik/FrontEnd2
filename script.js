function demo1(){
    var a=6;

    if(a%2==0)
      document.getElementById("demo").innerHTML= a + " is EVEN";
    else
      document.getElementById("demo").innerHTML= a + " is ODD";
}
function calc(){
    var a =document.getElementById("One").value;
    var b= document.getElementById("Two").value;
    var c=parseInt(a)+parseInt(b);
    console.log(c);
}