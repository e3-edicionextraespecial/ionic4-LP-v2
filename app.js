alert("WELCOME")

    document.getElementById("btnSumar1").addEventListener("click", sumarLP1);
    document.getElementById("btnRestar1").addEventListener("click", restarLP1);
    document.getElementById("btnSumar2").addEventListener("click", sumarLP2);
    document.getElementById("btnRestar2").addEventListener("click", restarLP2);
    var total1 = 8000;
    var total2 =8000;
   

    function sumarLP2(arg) {
        
        this.total2=arg;
     
         var porId=document.getElementById("valorB").value;
         var sumar=+porId
         total2= total2+sumar
         document.getElementById("puntosDevidaB").innerHTML = total2;
         }


         function restarLP2(arg) {

this.total2=arg;

var porId=document.getElementById("valorB").value;
var sumar=+porId
total2= total2-sumar
document.getElementById("puntosDevidaB").innerHTML = total2;
if (total2 <= 0){
    alert("EL juego ha terminado");
    }


}



    
    function sumarLP1(arg) {
        
   this.total1=arg;

    var porId=document.getElementById("valorA").value;
    var sumar=+porId
    total1= total1+sumar
    document.getElementById("puntosDevidaA").innerHTML = total1;
    }
function restarLP1(arg) {

    this.tota1l=arg;
  
    var porId=document.getElementById("valorA").value;
    var sumar=+porId
    total1= total1-sumar
    document.getElementById("puntosDevidaA").innerHTML = total1;
    if (total1 <= 0){
    	alert("EL juego ha terminado");
    	}
    
   
  }
  function dado() {

    var d1 = Math.floor(Math.random() * 6) + 1;
    
    var showDado = document.getElementById("showDado");
    showDado.innerHTML = d1
    alert("Su Numero es " + d1)
    
}

   
