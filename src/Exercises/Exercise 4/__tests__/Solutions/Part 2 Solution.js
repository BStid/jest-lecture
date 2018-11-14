import thumbWar from '../../thumb-war';
import * as utils from '../../utils';

test('returns winner', () => {
  const originalGetWinner = utils.getWinner;
  utils.getWinner = (...args) => {
    utils.getWinner.mock.calls.push(args);
    return args[1];
  };
  utils.getWinner.mock = { calls: [] };

  const winner = thumbWar('Ken Wheeler', 'Erik Golden');
  expect(winner).toBe('Erik Golden');
  expect(utils.getWinner.mock.calls).toHaveLength(2);
  utils.getWinner.mock.calls.forEach(args => {
    expect(args).toEqual(['Ken Wheeler', 'Erik Golden']);
  });

  utils.getWinner = originalGetWinner;
});
