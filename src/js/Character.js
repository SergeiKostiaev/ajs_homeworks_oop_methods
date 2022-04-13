export default class Character {
    constructor(name) {
      if (!name || name.length < 2 || name.length > 10) {
        throw new Error('ОШИБКА! Не верно задано имя');
      }
  
      this.name = name;
      this.health = 100;
      this.level = 1;
    }
  }