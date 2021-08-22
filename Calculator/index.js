function display(val){
document.getElementById("display").value+=val
}
function equ()
{
let x = document.getElementById("display").value
let y = eval(x)
document.getElementById("display").value = y
}