import Character from './Character.test';
import Bowman from './Bowman.test';
import Swordsman from './Swordsman.test';
import Magician from './Magician.test';
import Undead from './Undead.test';
import Zombie from './Zombie.test';
import Daemon from './Daemon.test';

test('Bowman', () => {
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

test('Swordsman', () => {
  const received = new Swordsman('Swo', 'Swordsman');
  const expected = {
      name: 'Swo',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
  };
  expect(received).toEqual(expected);
});

test('Magician', () => {
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

test('Undead', () => {
  const received = new Undead('Un', 'Undead');
  const expected = {
      name: 'Un',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
  };
  expect(received).toEqual(expected);
});

test('Zombie', () => {
  const received = new Zombie('Zo', 'Zombie');
  const expected = {
      name: 'Zo',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
  };
  expect(received).toEqual(expected);
});

test('Daemon', () => {
  const received = new Daemon('Da', 'Daemon');
  const expected = {
      name: 'Da',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
  };
  expect(received).toEqual(expected);
});

test('fail name', () => {
  let thrownError;
  const expextedError = new Error('Некорректное значение имени');
  try {
    const failName = new Character('1', 'Zombie', 14, 113);
    console.log(failName);
  } catch (error) {
    thrownError = error;
  }
  expect(thrownError).toEqual(expextedError);
});

test('fail type', () => {
  let thrownError;
  const expextedError = new Error('Некорректное значение типа');
  try {
    const failType = new Character('Айболит', 'Doctor', 1000, 1000);
    console.log(failType);
  } catch (error) {
    thrownError = error;
  }
  expect(thrownError).toEqual(expextedError);
});

// Методы
test('level up', () => {
  const daemonUp = new Character('ФросяПро', 'Daemon', 10, 40);
  daemonUp.levelUp();
  expect(daemonUp.level).toBe(2);
  expect(daemonUp.attack).toBe(12);
  expect(daemonUp.defence).toBe(48);
  expect(daemonUp.health).toBe(100);
});

test('damage health 100', () => {
  const damageUndead = new Character('Йорик', 'Undead', 25, 25);
  damageUndead.damage(3);
  expect(damageUndead.health).toBe(97.75);
});

test('damage health -10', () => {
  const damageUndead = new Character('Йорик', 'Undead', 25, 25);
  damageUndead.health = -10;
  damageUndead.damage(3);
  expect(damageUndead.health).toBe(-10);
});

test('fail level up', () => {
  let thrownError;
  const expextedError = new Error('Нельзя повысить level умершего');
  try {
    const failLevelUp = new Character('Айболит', 'Daemon', 10, 40);
    failLevelUp.health = 0;
    failLevelUp.levelUp();
    console.log(failLevelUp);
  } catch (error) {
    thrownError = error;
  }
  expect(thrownError).toEqual(expextedError);
});