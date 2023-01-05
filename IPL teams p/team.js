const prodId = new URLSearchParams(window.location.search).get('teamId');


let cardID = JSON.parse(localStorage.getItem('teamsData'));

let SingleItem = cardID.find(p => p.id.toString() === prodId);
const playersData = SingleItem.players;
localStorage.setItem('PlayersData' , JSON.stringify(playersData))
let singleTeamData = '';
let SinglePlayerCard = '';
function teamPlayers(elm) {
  console.log(elm)
    singleTeamData = `

    <div class="team-left-container">
        <img src=${elm.image} alt="">
     
    </div>
    <div class="team-right-container">
         <h1 class= 'team-title'>${elm.id}</h1>
        <div class="team-content">
            <span class='team-name'><span class ='title'>Name :</span>  ${elm.name} </span> 
            <span class = 'team-captian'><span class ='title'>Captian :</span>  ${elm.caption}</span> 
            <span class ='team-champ' ><span class ='title'>ChampionShip won:</span>${elm.ChampionShipWon}</span>

        </div>
        </div>
`
    let teamContainer = document.querySelector('.team-members')
    teamContainer.innerHTML = singleTeamData;


}

teamPlayers(SingleItem)
let playersCads = '';

// let storedData = localStorage.getItem('SingleItem');
//     if (storedData) {
//       SingleItem = JSON.parse(storedData);
//       console.log(SingleItem)
//     }
function SinglePlayersCards(SingleItem){
     playersCads = '';
    
    SingleItem.players.map((elm,index)=>{
        // console.log(elm)
        playersCads +=  `<a href='Players.html?playerId=${index}' >
        <div class="card" style="width: 18rem;">
        <img src=${elm.image} class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">Name :${elm.name}</h5>

        </div>

        
        
        
        
        
        </div>

        </a>`
    })


let playersSection = document.querySelector('.team-players-cards')
// console.log(playersSection)
playersSection.innerHTML = playersCads
 localStorage.setItem('SingleItem'  , JSON.stringify(SingleItem))


}
SinglePlayersCards(SingleItem)



//   add teams button
const addClass = document.getElementById('addPlayers')
//   const addTeams = document.getElementById('clickToadd')

  addClass.addEventListener('click',()=>{
    console.log('click')
    if(playersForm.style.display !== 'none'){
        playersForm.style.display = 'none'
    }else{
        playersForm.style.display = 'block'
    }  

  })

const playersForm = document.querySelector('.add-players')
  const crossIcons = document.getElementById('crossAddTeaams')

  crossIcons.addEventListener('click' , ()=>{
    if(playersForm.style.display !== 'block'){
        playersForm.style.display = 'block'
    }else{
        playersForm.style.display = 'none'
    }  
  })


//   form data  



let form = document.getElementById('form')
let obj = '';
form.addEventListener('submit' , (e)=>{
e.preventDefault();
let playerName = document.getElementById('Playersname').value
let playerRole = document.getElementById('PlayersRole').value
let playerDob = document.getElementById('PlayersDOB').value
let playersPrice = document.getElementById('PlayersPrice').value
let playerslogo = document.getElementById('Playerslogo').value




 obj = {
    name:  playerName,
    price: playersPrice,
    Role: playerRole,
    DOB : playerDob,
    image : playerslogo,

}
if(playersForm.style.display !== 'block'){
  playersForm.style.display = 'block'
}else{
  playersForm.style.display = 'none'
}  
SingleItem.players.push(obj)
console.log(SingleItem)

localStorage.setItem('SingleItem', JSON.stringify(SingleItem));

SinglePlayersCards(SingleItem);
})
