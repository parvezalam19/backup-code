const proId = new URLSearchParams(window.location.search).get('playerId')
console.log(proId)
const PlayerDetails = JSON.parse(localStorage.getItem('SingleItem'))
console.log(PlayerDetails)

let SingleItem = PlayerDetails.players.filter((p, i, arr) => {
  return i == proId
})
// console.log(SingleItem)
let playersDetails = ''
function ShowPlayerDetails(SingleItem) {

  SingleItem.map((elm) => {
    playersDetails = `
<div class="player-left-container">
<img
  src=${elm.image}
  alt=""
/>
</div>

<div class="player-right-container">
<h1>${elm.name}</h1>
<h2>${elm.DOB}</h2>
<table>
  <tr>
   
    <thead>
      <th>Team</th>
      <th>Role</th>
      <th>Price</th>
      <th>Nationality</th>

    </thead>
  </tr>
  <tr class="team-details">
    <th>${elm.team}</th>
    <th>${elm.Role}</th>
    <th>${elm.price}</th>
    <th>${elm.Nationlity}</th>

  </tr>
</table>
</div>

`

document.querySelector('.player-box').innerHTML = playersDetails;

  })




}
ShowPlayerDetails(SingleItem);



// // add players 
// const playersAdd = document.getElementById('addPlayers')

// const addClass = document.querySelector('.add-players')

// playersAdd.addEventListener('click', () => {
//   if (addClass.style.display !== 'none') {
//     addClass.style.display = 'none'
//   } else {
//     addClass.style.display = 'block'
//   }


// })

// const crossIcons = document.getElementById('crossAddTeaams')

// crossIcons.addEventListener('click', () => {
//   if (addClass.style.display !== 'block') {
//     addClass.style.display = 'block'
//   } else {
//     addClass.style.display = 'none'
//   }
// })



// form submitin
// const form = document.getElementById('form');
// let obj = '';
// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const playerName = document.getElementById('name').value
//   const playerRole = document.getElementById('role').value
//   const playerDOB = document.getElementById('dob').value
//   const playerImg = document.getElementById('imagedata').value

//   obj = {

//     image: playerImg,
//     name: playerName,
//     Role: playerRole,
//     DOB: playerDOB,


//   }

//   console.log(obj)

//   if (addClass.style.display !== 'block') {
//     addClass.style.display = 'block'
//   } else {
//     addClass.style.display = 'none'
//   }

//   playersArr.push(obj)
//   playersLoad();
// })



