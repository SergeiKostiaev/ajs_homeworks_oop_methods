import Undead from '../Undead';

test('Создание нового персонажа Undead', () => {
  const received = new Undead('Und', 'Undead');
  const expected = {
      name: 'Und',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
  };
  expect(received).toEqual(expected);
});