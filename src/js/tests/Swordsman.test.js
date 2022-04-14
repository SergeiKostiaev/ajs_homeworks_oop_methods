import Swordsman from '../Swordsman';

test('Создание нового персонажа Swordsman', () => {
  const received = new Swordsman('Sword', 'Swordsman');
  const expected = {
      name: 'Sword',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
  };
  expect(received).toEqual(expected);
});