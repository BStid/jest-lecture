import thumbWar from '../../thumb-war';
import * as utilsMock from '../../utils';

jest.mock('../../utils', () => {
  return {
    getWinner: jest.fn((p1, p2) => p2)
  };
});

test('returns winner', () => {
  const winner = thumbWar('Ken Wheeler', 'Erik Golden');
  expect(winner).toBe('Erik Golden');
  expect(utilsMock.getWinner).toHaveBeenCalledTimes(2);
  utilsMock.getWinner.mock.calls.forEach(args => {
    expect(args).toEqual(['Ken Wheeler', 'Erik Golden']);
  });
});
