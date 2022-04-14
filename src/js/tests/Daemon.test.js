import Daemon from '../Daemon';

test('Создание нового персонажа Daemon', () => {
  const received = new Daemon('Dae', 'Daemon');
  const expected = {
      name: 'Dae',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
  };
  expect(received).toEqual(expected);
});