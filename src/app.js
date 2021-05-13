/*PREGUNTA 3:
Escriba un programa que reciba una lista de nombres de variables escritos en underscore_case y
convertirlos en camelCase.*/
var s1 = 'underscore_case\n first_name\nSome_Variable\n  calculate_AGE\ndelayed_departure';
var mik = [];
//let str = s1.toLowerCase();
var str;
var a = s1.split("\n");
var x = a.length;
var h;
//console.log(h);
var e = String.fromCharCode(55357, 56360);
for (var i = 0; i < x; i++) {
    h = a[i];
    str = h.toLowerCase();
    function camelCase(str) {
        return str
            .replace(/\s(.)/g, function (a) {
            return a.toUpperCase();
        })
            .replace(/\_(.)/g, function (c) {
            return c.toUpperCase();
        })
            .replace(/\_/g, '')
            .replace(/\s/g, '')
            .replace(/^(.)/, function (b) {
            return b.toLowerCase();
        });
    }
    var m = camelCase(str);
    for (var j = 0; j <= i; j++) {
        mik[j] = e;
    }
    console.log(m + "    " + mik);
}
