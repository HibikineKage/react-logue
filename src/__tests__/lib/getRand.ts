import getRand from '../../lib/getRand';

describe('getRand', () => {
  it('should be different number by different step', () => {
    expect(getRand([100], 5).next()).not.toBe(getRand([100], 6).next());
  });
  it('should be same number if the step is equal', () => {
    expect(getRand([100], 5).next()).toBe(getRand([100], 5).next());
  });
});
