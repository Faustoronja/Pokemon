import CustomText from "../text/customText.js";

class Pokemon {
  constructor(name, stats, lifeBar, sprite, color, ExpBar) {
    this.name = name;
    this.stats = stats;
    this.LifeBar = lifeBar;
    this.sprite = sprite;
    this.color = color;
    this.ExpBar = ExpBar;
  }

  showPokemon() {
    new CustomText(this.name, "red").print();
    new CustomText(this.sprite, this.color).print();
    console.table(this.stats);
    this.LifeBar.printLife();
    this.ExpBar.printExp();
  }
}

export { Pokemon };
