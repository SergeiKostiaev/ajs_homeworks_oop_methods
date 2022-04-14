import Bowman from '../Bowman';

test('Создание нового персонажа Bowman', () => {
  const received = new Bowman('Bob', 'Bowman');
  const expected = {
      name: 'Bob',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
  };
  expect(received).toEqual(expected);
});