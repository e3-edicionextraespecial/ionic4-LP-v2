
    document.getElementById("btnSumar1").addEventListener("click", sumarLP1);
    document.getElementById("btnRestar1").addEventListener("click", restarLP1);
    document.getElementById("btnSumar2").addEventListener("click", sumarLP2);
    document.getElementById("btnRestar2").addEventListener("click", restarLP2);
    document.getElementById("dado").addEventListener("click", dado);
    var total1 = 8000;
    var total2 =8000;



      function showElem() {
        document.getElementById("myImg").style.visibility = "hidden"; 
        document.getElementById("showDado").style.visibility = "visible"; 
        var d1 = Math.floor(Math.random() * 6) + 1;
    
        var showDado = document.getElementById("showDado");
       

        var showDado = document.getElementById("showDado");
        showDado.innerHTML = d1
      }
   

    function sumarLP2(arg) {
        
        this.total2=arg;
     
         var porId=document.getElementById("valorB").value;
         var sumar=+porId
         total2= total2+sumar
       
         document.getElementById("puntosDevidaB").innerHTML = total2;
         document.getElementById("valorB").value = "";
         }


         function restarLP2(arg) {

this.total2=arg;

var porId=document.getElementById("valorB").value;
var sumar=+porId
total2= total2-sumar

document.getElementById("puntosDevidaB").innerHTML = total2;
document.getElementById("valorB").value = "";
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
    document.getElementById("valorA").value = "";
    }
function restarLP1(arg) {

    this.tota1l=arg;
  
    var porId=document.getElementById("valorA").value;
    var sumar=+porId
    total1= total1-sumar
    
    
    document.getElementById("puntosDevidaA").innerHTML = total1;
    document.getElementById("valorA").value = "";
    if (total1 <= 0){
    	alert("EL juego ha terminado");
    	}
    
   
  }
  function dado() {
    document.getElementById("myImg").style.visibility = "visible"; 

    document.getElementById("showDado").style.visibility = "hidden"; 

   



    
    
    showDado.innerHTML = d1
    
    
}
