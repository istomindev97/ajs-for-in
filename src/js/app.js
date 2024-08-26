const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

const order = ['level'];

const handler = function handler(object, givenOrder) {
  const allEntries = Object.entries(object);

  const arr1 = allEntries.filter((item) => givenOrder.includes(item[0]));

  const arr2 = allEntries.filter((item) => !givenOrder.includes(item[0])).sort();

  arr1.sort((a, b) => givenOrder.indexOf(a[0]) - givenOrder.indexOf(b[0]));

  const result = [...arr1, ...arr2];

  return result;
};

// eslint-disable-next-line no-console
console.log(handler(obj, order));

export default handler;
