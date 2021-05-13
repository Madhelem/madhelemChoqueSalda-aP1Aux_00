/*PREGUNTA 1:
Estamos creando una aplicación de apuestas de fútbol.
Supongamos que obtenemos datos de un servicio web sobre un determinado juego (vera un ejemplo del objeto “game” al final de este enunciado) trabajara con esos datos.
Sus tareas: */
const game = {
      team1: 'Bayern Munich',
      team2: 'Borrussia Dortmund',
      players: [
      ['Neuer','Pavard','Martinez','Alaba','Davies','Kimmich','Goretzka','Coman','Muller','Gnarby','Lewandowski',],
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
      team2: 6.5,
      },
      };
      
/*1. Cree una matriz de jugadores para cada equipo (variables 'jugadores1' y 'jugadores2')*/

//----------------------------equipo1
let jugadores1: String[]= game.players[0];
console.log(jugadores1);
//-----------------------------equipo2
let jugadores2: String[]= game.players[1];
console.log(jugadores2);