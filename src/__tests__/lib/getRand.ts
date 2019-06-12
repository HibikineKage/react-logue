import getRand from '../../lib/getRand';

describe('getRand', () => {
  it('should be different number by different step', () => {
    expect(getRand([100], 5)).not.toBe(getRand([100], 6));
  });
  it('should be same number if the step is equal', () => {
    expect(getRand([100], 5)).toBe(getRand([100], 5));
  });
});
