const homeButton = document.getElementById("home");
const goalKeepersButton = document.getElementById("goalKeepers");
const defButton = document.getElementById("defenders");
const midButton = document.getElementById("midfielders");
const forwardButton = document.getElementById("forwards");
const display = document.getElementById("display");
const playerEl = document.getElementById("body");

//array of all players
const myPlayers =[
    { 
        pName: "Ederson",
        src:"ederson.webp",
        position:"GK",
        About:"Ederson Santana de Moraes, simply known as Ederson, is a Brazilian professional footballer who plays as a goalkeeper for Premier League club Manchester City and the Brazil national team. He is widely regarded as one of the best goalkeepers in the world due to his accurate pinpoint distribution and ball playing skills "
    },
    { 
        pName: "Rodri",
        src:"rodrigo.webp",
        position:"MID",
        About:"Rodrigo Hernández Cascante, known as Rodri or Rodrigo, is a Spanish professional footballer who plays as a defensive midfielder for Premier League club Manchester City and the Spain national team. After stints with Villarreal and Atlético Madrid in La Liga, Rodri joined Premier League club Manchester City in 2019. "
    },
    {
        pName: "Kevin De Bruyne",
        src:"kevin-de-bruyne.webp",
        position:"MID",
        About:"Kevin De Bruyne is a Belgian professional footballer who plays as a midfielder for and captains both Premier League club Manchester City and the Belgium national team. He is widely regarded as one of the greatest players of his generation as well as one of the best midfielders in the world.  "
    },
    { 
        pName:"Ortega",
        src:"stefan-ortega-moreno.webp",
        position:"GK",
        About:"Stefan Ortega Moreno is a German professional footballer who plays as a goalkeeper for Premier League club Manchester City. "
        
    },
    { 
        pName: "Haaland",
        src:"erling-haaland.webp",
        position:"FWD",
        About:"Erling Braut Haaland is a Norwegian professional footballer who plays as a striker for Premier League club Manchester City and the Norway national team. Considered one of the best players in the world, he is known for his speed, strength, positioning, and finishing inside the box.  "
    },
    { 
        pName: "Grealish",
        src:"jack-grealish.webp",
        position:"MID",
        About:"Jack Peter Grealish is an English professional footballer who plays as a winger or attacking midfielder for Premier League club Manchester City and the England national team. "
    },
    { 
        pName: "Foden",
        src:"phil-foden.webp",
        position:"MID",
        About:"Philip Walter Foden is an English professional footballer who plays as a midfielder for Premier League club Manchester City and the England national team "
    },
    { 
        pName: "Alvarez",
        src:"julian-alvarez.webp",
        position:"FWD",
        About:"Julián Álvarez is an Argentine professional footballer who plays as a forward for Premier League club Manchester City and the Argentina national team. Álvarez began his football career in his native Argentina, where he is an academy graduate of River Plate, making his first-team debut for the club in 2018. "
    },
    { 
        pName: "Walker",
        src:"kyle-walker.webp",
        position:"DEF",
        About:"Kyle Andrew Walker is an English professional footballer who plays as a right-back for Premier League club Manchester City and the England national team. Considered one of the best full backs of his generation, Walker is known for his pace, strength and vision. "
    },
    {
        pName: "Dias",
        src:"ruben-dias.webp",
        position:"DEF",
        About:"Rúben dos Santos Gato Alves Dias is a Portuguese professional footballer who plays as a centre-back for Premier League club Manchester City and the Portugal national team. Considered one of the best defenders in the world, he is known for his defensive prowess, leadership, and aerial ability.  "
    },
    {
        pName: "Bernado",
        src:"bernardo-silva.webp",
        position:"MID",
        About:"Bernardo Mota Veiga de Carvalho e Silva is a Portuguese professional footballer who plays as an attacking midfielder or right winger for Premier League club Manchester City and the Portugal national team. "
    },
    { 
        pName: "Stones",
        src: "john-stones.webp",
        position:"DEF",
        About:"John Stones is an English professional footballer who plays as a centre back or defensive midfielder for Premier League club Manchester City and the England national team. Widely regarded as one of the best defenders in the world, Stones is known for his technical ability and his physical presence on the field."
    },
    {
        pName: "Doku",
        src:"jeremy-doku.webp",
        position:"FWD",
        About:"Jérémy Baffour Doku is a Belgian professional footballer who plays as a winger for Premier League club Manchester City and the Belgium national team. Doku began his senior professional career with Anderlecht, during the 2018–19 season, where he went on to score five goals in 34 league appearances over several seasons. "
    },
    {
        pName: "Akanji",
        src:"manuel-akanji.webp",
        position:"DEF",
        About:"Manuel Obafemi Akanji is a Swiss professional footballer who plays as a centre back or full back for Premier League club Manchester City and the Switzerland national team. "
    },
    {
        pName: "Gvardiol",
        src:"josko-gvardiol.webp",
        position:"DEF",
        About:"Joško Gvardiol is a Croatian professional footballer who plays as a defender for Premier League club Manchester City and the Croatia national team. Although primarily a centre-back, he has often played as a left-back.  "
    }
]
 
const allPlayers =(arr = myPlayers)=>{
    playerEl.innerHTML += arr.map(({pName,src},index) => `
    <button onclick="playerIdFunc(${index})">
       <div id="players">
          <img src=${src} width="70px">
          <p>${pName}</p>
       </div>
   </button>`).join("");
   
};
allPlayers();

function playerIdFunc(index = 0){
        playerEl.innerHTML = '';   
        const player = myPlayers[index]; 
        playerEl.innerHTML += `<div id="about">${player.About}</div>`; 
}



homeButton.addEventListener("click",() =>{
    playerEl.innerHTML = '';
    allPlayers();
    display.innerText = "Manchester City Team";
})

goalKeepersButton.addEventListener("click",() => {
    playerEl.innerHTML = '';
    allPlayers(myPlayers.filter((player) => player.position === "GK"));
    display.innerText = "GoalKeepers"
});

defButton.addEventListener("click",() => {
    playerEl.innerHTML = '';
    allPlayers(myPlayers.filter((player) => player.position === "DEF"));
    display.innerText = "Defenders";
});

midButton.addEventListener("click",() => {
    playerEl.innerHTML = '';
    allPlayers(myPlayers.filter((player) => player.position === "MID"));
    display.innerText ="Midfielders";
});

forwardButton.addEventListener("click",() => {
    playerEl.innerHTML = '';
    allPlayers(myPlayers.filter((player) => player.position === "FWD"));
    display.innerText = "Forwards";
});
 

 



 