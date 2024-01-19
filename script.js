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
        position:"GK"
    },
    {
        pName: "Rodri",
        src:"rodrigo.webp",
        position:"DEF"
    },
    {
        pName: "Kevin De Bruyne",
        src:"kevin-de-bruyne.webp",
        position:"MID"
    },
    {
        pName:"Ortega",
        src:"stefan-ortega-moreno.webp",
        position:"GK"
        
    },
    {
        pName: "Haaland",
        src:"erling-haaland.webp",
        position:"FWD"
    },
    {
        pName: "Grealish",
        src:"jack-grealish.webp",
        position:"MID"
    },
    {
        pName: "Foden",
        src:"phil-foden.webp",
        position:"FWD"
    },
    {
        pName: "Alvarez",
        src:"julian-alvarez.webp",
        position:"FWD"
    },
    {
        pName: "Walker",
        src:"kyle-walker.webp",
        position:"DEF"
    },
    {
        pName: "Dias",
        src:"ruben-dias.webp",
        position:"DEF"
    },
    {
        pName: "Bernado",
        src:"bernardo-silva.webp",
        position:"MID"
    },
    {
        pName: "Stones",
        src: "john-stones.webp",
        position:"DEF"
    },
    {
        pName: "Doku",
        src:"jeremy-doku.webp",
        position:"MID"
    },
    {
        pName: "Akanji",
        src:"manuel-akanji.webp",
        position:"DEF"
    },
    {
        pName: "Gvardiol",
        src:"josko-gvardiol.webp",
        position:"DEF"
    }
]

const allPlayers =(arr = myPlayers)=>{
    playerEl.innerHTML += arr.map(({pName,src}) => `
    <button>
       <div id="players">
          <img src=${src} width="70px">
          <p>${pName}</p>
       </div>
   </button>`)
   
};
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
 

 



 