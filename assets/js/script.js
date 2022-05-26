// VARIABLES
// ELEMENTS
var introContainer = document.getElementById("intro-container");
var startBtn = document.getElementById("start-btn");
var mainContainer = document.querySelector("#main-container");
var menuContainerEl;
var innContainerEl;
var trainingContainerEl;

// SOUNDS
// EFFECTS
var startSound = document.getElementById("start-sound");
var winLevelSound = document.getElementById("win-level");
var winBattleSound = document.getElementById("win-battle");
var winGameSound = document.getElementById("win-game");
var loseGameSound = document.getElementById("lose-game");
// MUSIC
var menuMusic = document.getElementById("menu-audio");
var innMusic = document.getElementById("inn-audio");
var marketMusic = document.getElementById("market-audio");
var trainingMusic = document.getElementById("training-audio");
var battleMusic = document.getElementById("battle-audio");
// VIKING SOUNDS
var vikingFightSound = document.getElementById("viking-battlecry");
var vikingWinSound = document.getElementById("viking-battlecry-long");
var vikingLoseSound = document.getElementById("viking-lose");
// KNIGHT SOUNDS
var knightAhSound = document.getElementById("knight-ah");
var knightGruntSound = document.getElementById("knight-grunt");
var knightOhSound = document.getElementById("knight-oh");
var knightYeahSound = document.getElementById("knight-yeah");
// WEAPON SOUNDS
var weaponOneSound = document.getElementById("weapon-hit-one");
var weaponTwoSound = document.getElementById("weapon-hit-two");
var swordOneSound = document.getElementById("sword-hit-one");
var swordTwoSound = document.getElementById("sword-hit-two");

// create array with viking sounds
var vikingBattleSounds = [
  vikingFightSound,
  vikingWinSound,
  vikingLoseSound,
  knightAhSound,
  knightGruntSound,
  knightOhSound,
  knightYeahSound,
  weaponOneSound,
  weaponTwoSound,
  swordOneSound,
  swordTwoSound,
];

// GAME

// function to generate a random number
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};

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

// ENEMY INFO

// VIKING INFO
var vikingInfo = {
  health: randomNumber(60, 80),
  attack: randomNumber(5, 8),
};
// PIG INFO
var pigInfo = {
  health: randomNumber(70, 90),
  attack: randomNumber(7, 10),
};
// GOBLIN INFO
var goblinInfo = {
  health: randomNumber(80, 100),
  attack: randomNumber(8, 12),
};

// GAME START

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
  // create div for inn container
  innContainerEl = document.createElement("div");
  innContainerEl.className = "content-container";
  innContainerEl.setAttribute("id", "inn-container");
  innContainerEl.setAttribute("data-state", "visible");

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
  // append stats div to inn container
  innContainerEl.appendChild(statsDivEl);

  // CENTER TEXT
  // create div for inn text
  var innTextDivEl = document.createElement("div");
  innTextDivEl.className = "text-box";
  innTextDivEl.textContent =
    "Welcome to the Inn! Would you like to spend 10 coins to gain 20 health?";
  innContainerEl.appendChild(innTextDivEl);

  // BUTTONS
  // create div for inn buttons
  var innBtnDivEl = document.createElement("div");
  innBtnDivEl.className = "option-btn-container";
  // create button for buying health
  var innBtnYes = document.createElement("button");
  innBtnYes.className = "option-btn-yes";
  innBtnYes.setAttribute = ("id", "inn-btn-yes");
  innBtnYes.textContent = "Buy Health";
  innBtnDivEl.appendChild(innBtnYes);
  // create button to go back to town
  var innBtnNo = document.createElement("button");
  innBtnNo.className = "option-btn-no";
  innBtnNo.setAttribute = ("id", "inn-btn-no");
  innBtnNo.textContent = "Go Back To Town";
  innBtnDivEl.appendChild(innBtnNo);
  // append button container to inn container
  innContainerEl.appendChild(innBtnDivEl);

  // append ALL to main container
  mainContainer.appendChild(innContainerEl);

  // EVENT LISTENERS
  innBtnYes.addEventListener("click", function () {
    playerInfo.fillHealth();
    healthStatsDivEl.textContent = playerInfo.health;
    moneyStatsDivEl.textContent = playerInfo.money;
  });

  innBtnNo.addEventListener("click", function () {
    innContainerEl.remove();
    innMusic.pause();
    loadMenu();
    menuMusic.currentTime = 0;
    menuMusic.volume = 0.2;
    menuMusic.play();
  });
}

// LOAD TRAINING FUNCTION
function loadTraining() {
  // create div for inn container
  trainingContainerEl = document.createElement("div");
  trainingContainerEl.className = "content-container";
  trainingContainerEl.setAttribute("id", "training-container");
  trainingContainerEl.setAttribute("data-state", "visible");

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
  // append stats div to inn container
  trainingContainerEl.appendChild(statsDivEl);

  // CENTER TEXT
  // create div for inn text
  var trainingTextDivEl = document.createElement("div");
  trainingTextDivEl.className = "text-box";
  trainingTextDivEl.textContent =
    "Welcome to the Training Yard! Would you like to spend 10 coins to gain 5 attack?";
  trainingContainerEl.appendChild(trainingTextDivEl);

  // BUTTONS
  // create div for training buttons
  var trainingBtnDivEl = document.createElement("div");
  trainingBtnDivEl.className = "option-btn-container";
  // create button for buying attack
  var trainingBtnYes = document.createElement("button");
  trainingBtnYes.className = "option-btn-yes";
  trainingBtnYes.setAttribute = ("id", "training-btn-yes");
  trainingBtnYes.textContent = "Buy Attack";
  trainingBtnDivEl.appendChild(trainingBtnYes);
  // create button to go back to town
  var trainingBtnNo = document.createElement("button");
  trainingBtnNo.className = "option-btn-no";
  trainingBtnNo.setAttribute = ("id", "training-btn-no");
  trainingBtnNo.textContent = "Go Back To Town";
  trainingBtnDivEl.appendChild(trainingBtnNo);
  // append button container to inn container
  trainingContainerEl.appendChild(trainingBtnDivEl);

  // append ALL to main container
  mainContainer.appendChild(trainingContainerEl);

  // EVENT LISTENERS
  trainingBtnYes.addEventListener("click", function () {
    playerInfo.upgradeAttack();
    attackStatsDivEl.textContent = playerInfo.attack;
    moneyStatsDivEl.textContent = playerInfo.money;
  });

  trainingBtnNo.addEventListener("click", function () {
    trainingContainerEl.remove();
    trainingMusic.pause();
    loadMenu();
    menuMusic.currentTime = 0;
    menuMusic.volume = 0.2;
    menuMusic.play();
  });
}

// LOAD MARKET FUNCTION
function loadMarket() {
  // create div for inn container
  marketContainerEl = document.createElement("div");
  marketContainerEl.className = "content-container";
  marketContainerEl.setAttribute("id", "market-container");
  marketContainerEl.setAttribute("data-state", "visible");

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
  // append stats div to market container
  marketContainerEl.appendChild(statsDivEl);

  // CENTER TEXT
  // create div for market text
  var marketTextDivEl = document.createElement("div");
  marketTextDivEl.className = "text-box";
  marketTextDivEl.textContent =
    "Welcome to the Market! Would you like to spend 10 coins to gain 10 defense?";
  marketContainerEl.appendChild(marketTextDivEl);

  // BUTTONS
  // create div for market buttons
  var marketBtnDivEl = document.createElement("div");
  marketBtnDivEl.className = "option-btn-container";
  // create button for buying defense
  var marketBtnYes = document.createElement("button");
  marketBtnYes.className = "option-btn-yes";
  marketBtnYes.setAttribute = ("id", "market-btn-yes");
  marketBtnYes.textContent = "Buy Defense";
  marketBtnDivEl.appendChild(marketBtnYes);
  // create button to go back to town
  var marketBtnNo = document.createElement("button");
  marketBtnNo.className = "option-btn-no";
  marketBtnNo.setAttribute = ("id", "market-btn-no");
  marketBtnNo.textContent = "Go Back To Town";
  marketBtnDivEl.appendChild(marketBtnNo);
  // append button container to market container
  marketContainerEl.appendChild(marketBtnDivEl);

  // append ALL to main container
  mainContainer.appendChild(marketContainerEl);

  // EVENT LISTENERS
  marketBtnYes.addEventListener("click", function () {
    playerInfo.upgradeDefense();
    defenseStatsDivEl.textContent = playerInfo.defense;
    moneyStatsDivEl.textContent = playerInfo.money;
  });

  marketBtnNo.addEventListener("click", function () {
    marketContainerEl.remove();
    marketMusic.pause();
    loadMenu();
    menuMusic.currentTime = 0;
    menuMusic.volume = 0.2;
    menuMusic.play();
  });
}

// LOAD BATTLE ONE FUNCTION
function loadBattle() {
  // create div for menu container
  battleContainerEl = document.createElement("div");
  battleContainerEl.className = "content-container";
  battleContainerEl.setAttribute("id", "battle-container");
  battleContainerEl.setAttribute("data-state", "visible");

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
  battleContainerEl.appendChild(statsDivEl);

  // CENTER CHARACTER IMAGES
  // create div container for both images
  var battleImageContainerEl = document.createElement("div");
  battleImageContainerEl.className = "character-container";
  // create div for knight image
  var knightImageContainerEl = document.createElement("div");
  knightImageContainerEl.className = "character-image-container";
  knightImageContainerEl.setAttribute("id", "knight-image-container");
  // add knight image for battle one
  var knightImageOne = document.createElement("img");
  knightImageOne.src = "./assets/images/characters/fight1.png";
  knightImageOne.setAttribute("id", "knight-one");
  knightImageOne.className = "character-img";
  knightImageContainerEl.appendChild(knightImageOne);
  // append knight image container to battle container
  battleImageContainerEl.appendChild(knightImageContainerEl);
  // create div for viking image
  var vikingImageContainerEl = document.createElement("div");
  vikingImageContainerEl.className = "character-image-container";
  vikingImageContainerEl.setAttribute("id", "viking-image-container");
  // add viking image for battle one
  var vikingFightImage = document.createElement("img");
  vikingFightImage.src = "./assets/images/characters/vikingfight.png";
  vikingFightImage.setAttribute("id", "viking-fight");
  vikingFightImage.className = "character-img";
  vikingImageContainerEl.appendChild(vikingFightImage);
  // append viking image container to battle container
  battleImageContainerEl.appendChild(vikingImageContainerEl);
  // append image container to battle container
  battleContainerEl.appendChild(battleImageContainerEl);

  // FIGHT BUTTON
  var fightBtn = document.createElement("button");
  fightBtn.className = "fight-btn";
  fightBtn.setAttribute("id", "battleOne-fight-btn");
  fightBtn.textContent = "Fight!";
  battleContainerEl.appendChild(fightBtn);

  // CENTER TEXT
  // create div for battle text
  var battleTextDivEl = document.createElement("div");
  battleTextDivEl.className = "text-box";
  battleTextDivEl.textContent = "BATTLE ONE";
  battleTextDivEl.setAttribute("id", "battle-text-box");
  battleContainerEl.appendChild(battleTextDivEl);

  // append ALL to main container
  mainContainer.appendChild(battleContainerEl);

  // BATTLE ONE EVENT LISTENER
  fightBtn.addEventListener("click", function () {
    // play random fight noise
    function randomSound() {
      var random = Math.floor(Math.random() * vikingBattleSounds.length);
      vikingBattleSounds[random].play();
    }
    randomSound();
    // check player health
    if (playerInfo.health > 0) {
      // check to see if player has defense
      if (playerInfo.defense > 0) {
        // subtract enemy attack from defense
        playerInfo.defense = vikingInfo.attack - playerInfo.defense;
        // check to see if defense is at zero
        if (playerInfo.defense <= 0) {
          // take remaining attack and subtract from health
          playerInfo.health = playerInfo.defense + playerInfo.health;
          // print new health stat on stat bar
          healthStatsDivEl.textContent = playerInfo.health;
          // set defense to zero
          playerInfo.defense = 0;
          // print new defense stat to stat bar
          defenseStatsDivEl.textContent = playerInfo.defense;
          // print attack info in text box
          var newAttackText = document.createElement("p");
          newAttackText.className = "info-text";
          newAttackText.innerHTML =
            "<b>Sir. Prise</b> attacked <b>Shakesbeer</b> by " +
            playerInfo.attack +
            " points! <b>Shakesbeer</b> hit <b>Sir. Prise</b> by " +
            vikingInfo.attack +
            " points! <b>Shakesbeer</b> has " +
            vikingInfo.health +
            " health left! Remaining defense added to health!";
          battleTextDivEl.appendChild(newAttackText);
        } else {
          // print new defense stat on stat bar
          defenseStatsDivEl.textContent = playerInfo.defense;
        }
      } else {
        // regular attack
      }
    } else {
      // player health is below zero, end game
    }
  });
}

// EVENT LISTENERS
startBtn.addEventListener("click", function () {
  startSound.play();
  introContainer.remove();
  loadMenu();
  menuMusic.volume = 0.2;
  menuMusic.play();
});
