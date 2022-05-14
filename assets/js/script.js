// VARIABLES
// ELEMENTS
var introContainer = document.getElementById("intro-container");
var startBtn = document.getElementById("start-btn");
var mainContainer = document.querySelector("#main-container");
var menuContainerEl;

// SOUNDS
var menuMusic = document.getElementById("menu-audio");
var startSound = document.getElementById("start-sound");
var innMusic = document.getElementById("inn-audio");
var marketMusic = document.getElementById("market-audio");
var trainingMusic = document.getElementById("training-audio");
var battleMusic = document.getElementById("battle-audio");

// GAME

// PLAYER INFO
var playerInfo = {
  health: 100,
  attack: 10,
  defense: 0,
  money: 10,
  reset: function () {
    this.health = 100;
    this.attack = 10;
    this.defense = 0;
    this.money = 10;
  },
  fillHealth: function () {
    if (this.money >= 10) {
      this.health += 20;
      this.money -= 10;
    } else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function () {
    if (this.money >= 10) {
      this.attack += 5;
      this.money -= 10;
    } else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeDefense: function () {
    if (this.money >= 10) {
      this.defense += 10;
      this.money -= 10;
    } else {
      window.alert("You don't have enough money!");
    }
  },
};

// LOAD MENU FUNCTION
function loadMenu() {
  // create div for menu container
  menuContainerEl = document.createElement("div");
  menuContainerEl.className = "content-container";
  menuContainerEl.setAttribute("id", "menu-container");
  menuContainerEl.setAttribute("data-state", "visible");

  // STATS INFO
  // create div for stats info
  var statsDivEl = document.createElement("div");
  statsDivEl.className = "stats-box";
  // create div for health
  var healthDivEl = document.createElement("div");
  healthDivEl.className = "stats-element";
  // create div for health icon
  var healthIconDivEl = document.createElement("div");
  healthIconDivEl.className = "health-icon";
  healthIconDivEl.innerHTML = '<ion-icon name="heart-outline"></ion-icon>';
  healthDivEl.appendChild(healthIconDivEl);
  // create div for health stats
  var healthStatsDivEl = document.createElement("div");
  healthStatsDivEl.className = "stats-text";
  healthStatsDivEl.textContent = playerInfo.health;
  healthDivEl.appendChild(healthStatsDivEl);
  // append health div to stats container
  statsDivEl.appendChild(healthDivEl);
  // create div for attack
  var attackDivEl = document.createElement("div");
  attackDivEl.className = "stats-element";
  // create div for attack icon
  var attackIconDivEl = document.createElement("div");
  attackIconDivEl.className = "attack-icon";
  attackIconDivEl.innerHTML = '<ion-icon name="flame-outline"></ion-icon>';
  attackDivEl.appendChild(attackIconDivEl);
  // create div for attack stats
  var attackStatsDivEl = document.createElement("div");
  attackStatsDivEl.className = "stats-text";
  attackStatsDivEl.textContent = playerInfo.attack;
  attackDivEl.appendChild(attackStatsDivEl);
  // append attack div to stats container
  statsDivEl.appendChild(attackDivEl);
  // create div for defense
  var defenseDivEl = document.createElement("div");
  defenseDivEl.className = "stats-element";
  // create div for defense icon
  var defenseIconDivEl = document.createElement("div");
  defenseIconDivEl.className = "defense-icon";
  defenseIconDivEl.innerHTML = '<ion-icon name="shield-outline"></ion-icon>';
  defenseDivEl.appendChild(defenseIconDivEl);
  // create div for defense stats
  var defenseStatsDivEl = document.createElement("div");
  defenseStatsDivEl.className = "stats-text";
  defenseStatsDivEl.textContent = playerInfo.defense;
  defenseDivEl.appendChild(defenseStatsDivEl);
  // append defense div to stats container
  statsDivEl.appendChild(defenseDivEl);
  // create div for money
  var moneyDivEl = document.createElement("div");
  moneyDivEl.className = "stats-element";
  // create div for money icon
  var moneyIconDivEl = document.createElement("div");
  moneyIconDivEl.className = "money-icon";
  moneyIconDivEl.innerHTML = '<ion-icon name="server-outline"></ion-icon>';
  moneyDivEl.appendChild(moneyIconDivEl);
  // create div for money stats
  var moneyStatsDivEl = document.createElement("div");
  moneyStatsDivEl.className = "stats-text";
  moneyStatsDivEl.textContent = playerInfo.money;
  moneyDivEl.appendChild(moneyStatsDivEl);
  // append money div to stats container
  statsDivEl.appendChild(moneyDivEl);
  // append stats div to menu container
  menuContainerEl.appendChild(statsDivEl);

  // CENTER TEXT
  // create div for menu text
  var menuTextDivEl = document.createElement("div");
  menuTextDivEl.className = "text-box";
  menuTextDivEl.textContent =
    "Would you like to visit the village and spend some coins or get straight to fighting?";
  menuContainerEl.appendChild(menuTextDivEl);

  // BUTTONS
  // TOWN BUTTONS
  // create div for town buttons
  var townBtnDivEl = document.createElement("div");
  townBtnDivEl.className = "town-btn-container";
  // create button for inn
  var innBtn = document.createElement("button");
  innBtn.className = "town-btn";
  innBtn.setAttribute("id", "inn-btn");
  innBtn.textContent = "Inn (Health)";
  townBtnDivEl.appendChild(innBtn);
  // create button for training
  var trainingBtn = document.createElement("button");
  trainingBtn.className = "town-btn";
  trainingBtn.setAttribute("id", "trainingBtn");
  trainingBtn.textContent = "Training (Attack)";
  townBtnDivEl.appendChild(trainingBtn);
  // create button for market
  var marketBtn = document.createElement("button");
  marketBtn.className = "town-btn";
  marketBtn.setAttribute("id", "market-btn");
  marketBtn.textContent = "Market (Defense)";
  townBtnDivEl.appendChild(marketBtn);
  // append town button container to menu container
  menuContainerEl.appendChild(townBtnDivEl);
  // FIGHT BUTTON
  var fightBtn = document.createElement("button");
  fightBtn.className = "fight-btn";
  fightBtn.setAttribute("id", "menu-fight-btn");
  fightBtn.textContent = "Fight!";
  menuContainerEl.appendChild(fightBtn);

  // append ALL to main container
  mainContainer.appendChild(menuContainerEl);

  // event listeners
  innBtn.addEventListener("click", function () {
    menuContainerEl.remove();
    loadInn();
    menuMusic.pause();
    innMusic.volume = 0.2;
    innMusic.play();
  });

  trainingBtn.addEventListener("click", function () {
    menuContainerEl.remove();
    loadTraining();
    menuMusic.pause();
    trainingMusic.volume = 0.2;
    trainingMusic.play();
  });

  marketBtn.addEventListener("click", function () {
    menuContainerEl.remove();
    loadMarket();
    menuMusic.pause();
    marketMusic.volume = 0.2;
    marketMusic.play();
  });

  fightBtn.addEventListener("click", function () {
    menuContainerEl.remove();
    loadBattle();
    menuMusic.pause();
    battleMusic.volume = 0.6;
    battleMusic.play();
  });
}

// LOAD INN FUNCTION
function loadInn() {
  console.log("Inn function is working!");
}

// LOAD MARKET FUNCTION
function loadMarket() {
  console.log("Market function is working!");
}

// LOAD TRAINING FUNCTION
function loadTraining() {
  console.log("Training function is working!");
}

// LOAD BATTLE ONE FUNCTION
function loadBattle() {
  console.log("Battle function is working!");
  // if enemy.health < 0 battle them etc
}

// EVENT LISTENERS
startBtn.addEventListener("click", function () {
  startSound.play();
  introContainer.remove();
  loadMenu();
  menuMusic.volume = 0.2;
  menuMusic.play();
});
