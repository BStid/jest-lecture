const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;

test('Adding 1 + 1 equals 2', () => {
  expect(sum(1, 1)).toBe(2);
});

test('Multiplying 1 * 1 equals 1', () => {
  expect(mul(1, 1)).toBe(1);
});

test('Subtracting 1 - 1 equals 0', () => {
  expect(sub(1, 1)).toBe(0);
});

test('lemon promise', () => {
  expect(Promise.resolve('lemon')).resolves.toBe('lemon');
});

expect(Promise.reject(new Error('octopus'))).rejects.toThrow('octopus');

describe('First set of math tests', () => {
  beforeEach(() => {
    // console.log('before each');
  });
  beforeAll(() => {
    // console.log('before all');
  });
  test('Dividing 1 / 1 equals 1', () => {
    expect(div(1, 1)).toBe(1);
  });

  test('Adding 1 + 1 does not equal 3', () => {
    expect(sum(1, 1)).not.toBe(3);
  });
});
