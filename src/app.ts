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

/*2. El primer jugador en cualquier conjunto de jugadores es el portero y los demás son jugadores de campo. 
Para el Bayern de Múnich (equipo 1) cree una variable ('gk') con el nombre del portero y una matriz ('fieldPlayers') con los 10 restantes jugadores de campo*/

let gk= jugadores1[0];
const [n1,...restodenombres]=jugadores1;
let fieldPlayers: String[]=[...restodenombres];
console.log(fieldPlayers);

/*3. Cree una matriz 'allPlayers' que contenga a todos los jugadores de ambos equipos (22 jugadores)*/
//ambos  equipos

//let allPlayers: String[]=[...jugadores1,...jugadores2]; //un metodo para la respuesta
let allPlayers: String[]=jugadores1.concat(jugadores2);  //segundo metodo para la respuesta  
console.log(allPlayers);

/*4. Durante el partido, el Bayern de Múnich (equipo 1) utilizó 3 jugadores suplentes. Así que crea una nueva matriz 
('players1Final') que contiene todos los jugadores originales del equipo1 más 'Thiago', 'Coutinho' y 'Perisic'*/

let players1Final: String  []=[...jugadores1,'Thiago', 'Coutinho' , 'Perisic']
console.log(players1Final);

/*5. Basado en el objeto game.odds, cree una variable para cada cuota (llamada 'equipo1', 'empate' y 'equipo2')*/

let equipo1=game.odds.team1;
console.log(equipo1);
let equipo2=game.odds.team2;
console.log(equipo2);
let empate=game.odds.x;
console.log(empate);


/*6. Escriba una función ('printGoals') que reciba un número arbitrario de nombres de jugadores (no un array) 
e imprime cada uno de ellos en la consola, junto con el número de goles que se marcaron en total (número de nombres de jugadores transferidos).*/

let v =(printGoals(allPlayers));

function printGoals(...ns:any) {
    let goles:any=game.scored;
    let nh=ns;
    let arr:String[] = [...ns[0]];  
    for(let i = 0; i < arr.length; i++) {
         let cont = 0;
        for(let j = 0; j < goles.length; j++){
            if(goles[j] === arr[i]) {
                cont ++;
            }
        }
        console.log(arr[i] + " " + cont);
        
    }
}


/*7. Es más probable que gane el equipo con la cuota más baja. Imprima en la consola que equipo es más 
probable que gane, sin usar una declaración if/else o el operador ternario.*/

var ganador =game.odds.team1<game.odds.team2?console.log("el ganador es :" + game.team1+ " con " + game.odds.team1 ):console.log("el ganador es :" + game.team2 + " con " + game.odds.team2);
