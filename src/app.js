/*PREGUNTA 2:
Se desea construir una calculadora de propinas muy simple para cada vez que vaya a comer en un
restaurante. Supongamos que, en su país, es habitual dar una propina del 15% si el valor de la factura está
entre 50 y 300. Si el valor es diferente, la propina es del 20%.
Sus tareas:*/
/*1. Calcule la propina, dependiendo del valor de la factura. Cree una variable llamada ‘tip' para esto. No
está permitido usar una declaración if / else*/
var fac = 111;
var tip = fac <= 300 ? (fac * 0.15) : fac >= 50 ? (fac * 0.15) : (fac * 0.20);
console.log("la propina  sin utilizar  if else de" + fac + " es " + tip); //imprimir  la propina de  un valor  de factura
/*2. Imprima una cadena en la consola que contenga el valor de la factura, la propina y el valor final.
(factura + propina). Ejemplo: "La factura fue 275, la propina fue 41,25 y el valor total 316.25 "*/
var cadena = "La factura fue " + fac + ", la propina  fue " + tip + " y el valor total " + (fac + tip) + " ";
console.log(cadena);
/*3. Escriba una función 'calcTip' que tome cualquier valor de factura como entrada y devuelva la propina
correspondiente, calculada según las reglas anteriores. Pruebe la función con un valor de factura de
100*/
function calTip(factura) {
    var propina;
    if (factura >= 50 && factura <= 300) {
        propina = factura * 0.15;
    }
    else {
        propina = factura * 0.20;
    }
    return propina;
}
console.log("la propina  utilizando la  funcion de 100 es " + calTip(100)); //provando la funcion 
/*4. Cree un array de 'facturas' que contenga los siguientes datos de prueba: 22, 295, 176, 440, 37, 105,
10, 1100, 86, 52 */
var facturas = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
/* 5. Cree arrays vacíos para las propinas y los totales ('propinas' y 'totales')*/
var propinas = [];
var totales = [];
/*6. Utilice la función 'calcTip' que escribimos antes para calcular propinas y valores totales (factura +
propina) para cada valor de factura en la matriz de facturas. */
for (var i = 0; i < facturas.length; i++) {
    propinas[i] = calTip(facturas[i]);
    totales[i] = (calTip(facturas[i])) + facturas[i];
}
console.log("array de facturas  :" + facturas); //imprimir  el array de  facturas
console.log("array de propinas: " + propinas); //imprimir  el array de propinas 
console.log("array de totales: " + totales); //imprimir  el array de totales 
