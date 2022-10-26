// var message = document.querySelector(".message");
// var score = document.querySelector(".score");
// var buttons = document.querySelectorAll("button");
// var playerCount = document.querySelector('.player')
// var computerCount = document.querySelector('.computer')


// var winnerScore = [0, 0];


// for (var i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", play);
//   buttons[i].addEventListener('click', counter);
// }

// function play(event) {
//   var playerSelect = event.target.innerText;
 
//   var computerSelect = Math.random();

//   if (computerSelect < 0.34) {
//     computerSelect = "Камень";
//   } else if (computerSelect <= 0.67) {
//     computerSelect = "Бумага";
//   } else {
//     computerSelect = "Ножницы";
//   }

//   var result = checkWinner(playerSelect, computerSelect);


//   if (result === "Игрок") {
//     winnerScore[0]++;
//   }
 
//   if (result === "Компьютер") {
//     winnerScore[1]++;
//   }

//   console.log("Игрок:", playerSelect, "Компьютер:", computerSelect);
//   console.log('Победитель:'+ result, winnerScore);
// }

// function checkWinner(player, computer) {
//   if (player === "Камень" && computer === "Бумага" || 
//   player === 'Бумага' && computer === 'Ножницы' || 
//   player === 'Ножницы' && computer === 'Камень') {
//     return "Компьютер";
//   }

//   if (player === "Ножницы" && computer === "Бумага" || 
//   player ==="Камень" && computer === "Ножницы" ||
//   player ==="Бумага" && computer ==="Камень") {
//     return "Игрок";
//   } 

//   if  (player === 'Ножницы'&& computer ==="Ножницы" ||
//   player === 'Камень' && computer === 'Камень' ||
//   player === 'Бумага' && computer === 'Бумага'){
//    return 'Ничья';
//   } 

// }
// function counter(){
//    playerCount.innerHTML = winnerScore[0];
//    computerCount.innerHTML = winnerScore[1];
// }

var computerSelect = Math.random();
class Game{
  constructor(player,computerSelect){
    this.PlayerChoice = player,
    this.ComputerChoice=computerSelect
    this.winnerScore = [0, 0]
  }

  get getComputerSelect(){
    if (this.ComputerChoice < 0.34) {
      return this.computerSelect = "Камень";
    } else if (this.ComputerChoice <= 0.67) {
     return this.computerSelect = "Бумага";
    } else {
     return this.computerSelect = "Ножницы";
    }
  }

  get Getw(){
    if (this.PlayerChoice === "Камень" && this.computerSelect === "Бумага" || 
  this.PlayerChoice === 'Бумага' && this.computerSelect === 'Ножницы' || 
  this.PlayerChoice === 'Ножницы' && this.computerSelect === 'Камень') {
    return this.getwinner="Компьютер";
  }

  if (this.PlayerChoice === "Ножницы" && this.computerSelect === "Бумага" || 
this.PlayerChoice ==="Камень" && this.computerSelect === "Ножницы" ||
  this.PlayerChoice ==="Бумага" && this.computerSelect ==="Камень") {
    return this.getwinner="Игрок";
  } 

  if  (this.PlayerChoice === 'Ножницы'&& this.computerSelect ==="Ножницы" ||
  this.PlayerChoice === 'Камень' && this.computerSelect === 'Камень' ||
  this.PlayerChoice === 'Бумага' && this.computerSelect === 'Бумага'){
   return this.getwinner='Ничья';
  } 
}
  get winnerS(){
    if (this.getwinner === "Игрок") {
     return this.winnerScore[0]=+1;
    }
    if (this.getwinner === "Компьютер") {
      return this.winnerScore[1]=+1;
    }
  }
  }

function startGame(){
  const game = new Game(prompt(),Math.random())
  alert(game.getComputerSelect)
  alert(game.Getw)
  alert(game.winnerS)
}
