/*PREGUNTA 2:
Se desea construir una calculadora de propinas muy simple para cada vez que vaya a comer en un
restaurante. Supongamos que, en su país, es habitual dar una propina del 15% si el valor de la factura está
entre 50 y 300. Si el valor es diferente, la propina es del 20%.
Sus tareas:*/

/*1. Calcule la propina, dependiendo del valor de la factura. Cree una variable llamada ‘tip' para esto. No
está permitido usar una declaración if / else*/

var fac=111;

var tip =fac<=300?(fac*0.15):fac>=50?(fac*0.15):(fac*0.20);
console.log("la propina  sin utilizar  if else de"+fac +" es "+tip);//imprimir  la propina de  un valor  de factura

/*2. Imprima una cadena en la consola que contenga el valor de la factura, la propina y el valor final.
(factura + propina). Ejemplo: "La factura fue 275, la propina fue 41,25 y el valor total 316.25 "*/

let cadena:string = `La factura fue ${fac}, la propina  fue ${tip} y el valor total ${fac+tip} `;
console.log(cadena)