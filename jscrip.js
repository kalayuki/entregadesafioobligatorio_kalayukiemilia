
// variables ingreso de datos
let entrada =Number(prompt(`Ingrese numero del producto solicitado:
1. Juego de arandanos X 1L $200
2. Leche de almendras X 1L $300
3. Leche de coco X 1L $450
4. Aceite de coco x 500g $500
5. Finalizar `))
let cantidades = Number (prompt("ingresrae cantidades para finalizar ingrese 5"))

//Variable para el precio final
let montoFinal = Number()

// Ciclo
while (entrada != 5){
  
  montoFinal += precio (entrada,cantidades)
  alert(` Producto ${entrada} x ${cantidades} und. = $ ${precio (entrada,cantidades)}`)
  entrada =Number(prompt(`Ingrese numero del producto solicitado:
  1. Juego de arandanos X 1L $200
  2. Leche de almendras X 1L $300
  3. Leche de coco X 1L $450
  4. Aceite de coco x 500g $500
  5. Finalizar `))
 cantidades = Number (prompt("Ingrese cantidades, para finaliza ingrese 5"))
}

// Alert de precio final
alert(`Total a abonar ${montoFinal} `)

// funcion para determinar el precio segun cantidades
function precio (entrada,cantidades){
  if (entrada == 1){
     return cantidades * 200 
  }
  else if ( entrada == 2){
     return cantidades *300
  }
  else if (entrada==3){
    return cantidades *450
  }
  else if (entrada == 4){
    return cantidades * 500
  }
}