import Magician from '../Magician';

test('Создание нового персонажа Magician', () => {
  const received = new Magician('Mag', 'Magician');
  const expected = {
      name: 'Mag',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
  };
  expect(received).toEqual(expected);
});