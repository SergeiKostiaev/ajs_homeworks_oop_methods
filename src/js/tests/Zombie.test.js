import Zombie from '../Zombie';

test('Создание нового персонажа Zombie', () => {
  const received = new Zombie('Zomb', 'Zombie');
  const expected = {
      name: 'Zomb',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
  };
  expect(received).toEqual(expected);
});