import Character from '../Character';

test('should check the class Character', () => {
  class TestCharacter {
    constructor(name) {
      this.name = name;
      this.health = 100;
      this.level = 1;
    }
  }

  const received = new TestCharacter('Игрок');
  const expected = new Character('Игрок');
  expect(received).toEqual(expected);
});

test('should check the class Character no name', () => {
  function errorName() {
    const testName = new Character();
    return testName;
  }
  expect(errorName).toThrowError(Error);
});