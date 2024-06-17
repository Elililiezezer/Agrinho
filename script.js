var x = 0
var y = 0
window.addEventListener("keydown",function(event){
    var tecla = event.keyCode
    if ( tecla == "68"){
        x = x + 10
        this.document.getElementById("--objet").style.left=x+"px"
    }
    if ( tecla == "87"){
        y = y - 10
        this.document.getElementById("--objet").style.top=y+"px"
    }
    if ( tecla == "83"){
        y = y + 10
        this.document.getElementById("--objet").style.top=y+"px"
    }
    if ( tecla == "65"){
        x = x - 10
        this.document.getElementById("--objet").style.left=x+"px"
    }
})