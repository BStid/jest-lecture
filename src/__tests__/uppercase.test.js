const uppercase = str => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject('Empty string');
      return;
    }
    resolve(str.toUpperCase());
  });
};

describe('Set of uppercase tests', () => {
  test(`uppercase 'test' to equal 'TEST'`, () => {
    return uppercase('').catch(e => {
      expect(e).toMatch('Empty string');
    });
  });

  test(`uppercase 'test' to equal 'TEST'`, async () => {
    const str = await uppercase('test');
    expect(str).toBe('TEST');
  });
});
