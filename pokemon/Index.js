import bulbasaurAscciArt from "./assests/asciisprites/bulbasaur.js";
import charmanderAsciiArt from "./assests/asciisprites/charmander.js";
import pikachuAsciArt from "./assests/asciisprites/pikachu.js";
import squirtleAsciiArt from "./assests/asciisprites/squirtle.js";
import { LifeBar } from "./models/bars/bars.js";
import { ExpBar } from "./models/bars/bars.js";
import { Pokemon } from "./models/pokemons/pokemon.js";

const PikachuLifeBar = new LifeBar(100);
const PikachuExpBar = new ExpBar(100);
const Pikachu = new Pokemon(
  "Pollito Amarillo",
  { atk: 50, def: 40, atkS: 60, defS: 20, speed: 2 },
  PikachuLifeBar,
  pikachuAsciArt,
  "yellow",
  PikachuExpBar
);

Pikachu.showPokemon();

PikachuLifeBar.actual = 20;
PikachuExpBar.actual = 10;
Pikachu.showPokemon();

const CharmanderLifeBar = new LifeBar(100);
const CharmanderExpBar = new ExpBar(100);
const Charmander = new Pokemon(
  "Chorizito",
  { atk: 150, def: 140, atkS: 160, defS: 120, speed: 12 },
  CharmanderLifeBar,
  charmanderAsciiArt,
  "orange",
  CharmanderExpBar
);

Charmander.showPokemon();

CharmanderLifeBar.actual = 20;
PikachuExpBar.actual = 25;
Charmander.showPokemon();

const BulbasaurLifeBar = new LifeBar(100);
const BulbasaurExpBar = new ExpBar(100);
const Bulbasaur = new Pokemon(
  "Lechugon",
  { atk: 40, def: 170, atkS: 30, defS: 180, speed: 6 },
  BulbasaurLifeBar,
  bulbasaurAscciArt,
  "green",
  BulbasaurExpBar
);

Bulbasaur.showPokemon();

BulbasaurLifeBar.actual = 20;
BulbasaurExpBar.actual = 50;
Bulbasaur.showPokemon();

const SquirtleLifeBar = new LifeBar(100);
const SquirtleExpBar = new ExpBar(100);
const Squirtle = new Pokemon(
  "Tortugon",
  { atk: 100, def: 60, atkS: 180, defS: 80, speed: 9 },
  SquirtleLifeBar,
  squirtleAsciiArt,
  "blue",
  SquirtleExpBar
);

Squirtle.showPokemon();

SquirtleLifeBar.actual = 20;
SquirtleExpBar.actual = 80;
Squirtle.showPokemon();
