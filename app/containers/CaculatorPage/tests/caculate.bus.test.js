import testcase from '../testcase.bus';

describe('test san luong lua', () => {
  it('should...', () => {
    const expectedResult = 4;
    expect(testcase(2)).toBe(expectedResult);
  });

  describe(' param1 === 0 and param2 > 0', () => {
    it('should return positive correctly result when pass param1 === 0 and param2 > 0', () => {
      const expectedResult = 6.5;
      expect(testcase(0, 2)).toBe(expectedResult);
    });

    it('should return 0 when pass param1 !== 0 (negative)', () => {
      const expectedResult = 0;
      expect(testcase(-1, 2)).toBe(expectedResult);
    });
  });

  it('should return 0 when pass in negative', () => {
    const expectedResult = 0;
    expect(testcase(-2)).toBe(expectedResult);
  });
});
