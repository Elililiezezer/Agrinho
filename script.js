var x = 0
var y = 0
window.addEventListener("keydown",function(event){
    var tecla = event.keyCode
    this.alert(tecla)
    if ( tecla == "68"){
        x = x + 10
        this.document.getElementById("object").style.left=x+"px"
    }
    if ( tecla == "87"){
        y = y - 10
        this.document.getElementById("object").style.top=y+"px"
    }
})