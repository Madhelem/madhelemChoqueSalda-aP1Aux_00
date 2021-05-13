var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
/*PREGUNTA 1:
Estamos creando una aplicación de apuestas de fútbol.
Supongamos que obtenemos datos de un servicio web sobre un determinado juego (vera un ejemplo del objeto “game” al final de este enunciado) trabajara con esos datos.
Sus tareas: */
var game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski',],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5
    }
};
/*1. Cree una matriz de jugadores para cada equipo (variables 'jugadores1' y 'jugadores2')*/
//----------------------------equipo1
var jugadores1 = game.players[0];
console.log(jugadores1);
//-----------------------------equipo2
var jugadores2 = game.players[1];
console.log(jugadores2);
/*2. El primer jugador en cualquier conjunto de jugadores es el portero y los demás son jugadores de campo.
Para el Bayern de Múnich (equipo 1) cree una variable ('gk') con el nombre del portero y una matriz ('fieldPlayers') con los 10 restantes jugadores de campo*/
var gk = jugadores1[0];
var n1 = jugadores1[0], restodenombres = jugadores1.slice(1);
var fieldPlayers = __spreadArray([], restodenombres);
console.log(fieldPlayers);
/*3. Cree una matriz 'allPlayers' que contenga a todos los jugadores de ambos equipos (22 jugadores)*/
//ambos  equipos
//let allPlayers: String[]=[...jugadores1,...jugadores2]; //un metodo para la respuesta
var allPlayers = jugadores1.concat(jugadores2); //segundo metodo para la respuesta  
console.log(allPlayers);
