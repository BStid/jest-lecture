import thumbWar from '../../thumb-war';
import * as utils from '../../utils';

test('returns winner', () => {
  jest.spyOn(utils, 'getWinner');
  utils.getWinner.mockImplementation((p1, p2) => p2);

  const winner = thumbWar('Ken Wheeler', 'Erik Golden');
  expect(winner).toBe('Erik Golden');
  expect(utils.getWinner).toHaveBeenCalledTimes(2);
  utils.getWinner.mock.calls.forEach(args => {
    expect(args).toEqual(['Ken Wheeler', 'Erik Golden']);
  });

  utils.getWinner.mockRestore();
});
