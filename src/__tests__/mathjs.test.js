const mathjs = jest.fn(() => 'test');

mathjs.log = jest.fn(() => 'test');
test(`The mathjs log function`, () => {
  const result = mathjs.log(10000, 10);
  expect(result).toBe('test');
  expect(mathjs.log).toHaveBeenCalled();
  expect(mathjs.log).toHaveBeenCalledWith(10000, 10);
});
