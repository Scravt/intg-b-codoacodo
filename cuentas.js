
var total=document.getElementById("total11");
var Valordetiket = 200
var ValorConDescuento=0
var cantidad = document.getElementById("cantidad");
var $condicion = document.getElementById("inputState");

function hola (){
  total.innerHTML=ValorConDescuento*cantidad.value;
  console.log(typeof(cantidad));
}


document.getElementById("resumen").onclick = () => {  
  if ($condicion.selectedIndex == 1){
      ValorConDescuento=Valordetiket*0.2;
    } else if ($condicion.selectedIndex==2){
      ValorConDescuento=Valordetiket*0.5;
    }else if ($condicion.selectedIndex==3){
      ValorConDescuento=Valordetiket*0.85;
    }else{
      ValorConDescuento=Valordetiket;
    }

    hola();
}
 
  

  