class Hero {
    #powerCount = 10;

    constructor(name) {
        this.name = name;
    }

    getCurrentPowerCount(){
        return this.#powerCount;
    }

    train(){
        this.#powerCount += 1;
    }
}
let heroCount = 0;

const heroes = [];

let hero = gethero("hulk");
let geralt = gethero("geralt");

function gethero(heroName){
    heroCount++;
    let hero = new Hero(heroName);
    heroes.push(hero);
}
const print_hall_of_fame = () => {
    let spiderman = gethero("spiderman");
    // heroes.push(spiderman);
    const heroesContainer = document.querySelector('.hero');

    heroes.map((x) => {
        const name = x.name;
        const heroElement = document.createElement('div');
        heroElement.id = name;

        heroElement.innerHTML = `<p>${name}</p>${x.getCurrentPowerCount()}</p>`;

        heroesContainer.append(heroElement);
    });

};
print_hall_of_fame();
const heroCountText = document.querySelector('.hero h1');
heroCountText.textContent = `Hero count: ${heroes.length}`;
const button = document.querySelector('button');
button.addEventListener('click', trainHeroes);

function trainHeroes(){
    for(let i = 0; i < heroes.length; i++){
        heroes[i].train();
        document.getElementById(heroes[i].name).innerHTML = `<p>${heroes[i].name}</p>${heroes[i].getCurrentPowerCount()}</p>`;
    }
    
}

