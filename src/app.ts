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