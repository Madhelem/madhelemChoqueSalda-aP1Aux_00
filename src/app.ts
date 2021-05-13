/*PREGUNTA 3:
Escriba un programa que reciba una lista de nombres de variables escritos en underscore_case y
convertirlos en camelCase.*/

let s1 = 'underscore_case\n first_name\nSome_Variable\n  calculate_AGE\ndelayed_departure';
let mik :String []= [];

//let str = s1.toLowerCase();
let str;
let a= s1.split("\n");
let x= a.length;
let h;

//console.log(h);
let e = String.fromCharCode(55357, 56360);

for(let i=0;i<x;i++){
        h= a[i];
        str = h.toLowerCase();
        function camelCase(str:String ) {
            return str
                .replace(/\s(.)/g, function (a) {
                                          return a.toUpperCase();
                                           }
                        )   
                 .replace(/\_(.)/g, function (c) {
                                          return c.toUpperCase();
                                           }
                        )       
                .replace(/\_/g,'')
                .replace(/\s/g,'')
                .replace(/^(.)/, function(b) {
                                           return b.toLowerCase();       
                                }
                );
        
            }
      let m=camelCase(str);
      for(let j=0;j<=i;j++)
      {
            mik [j]=e;
      }
     
      console.log(m+"    "+mik);    
}
