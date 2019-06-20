import {calculateAge} from './Card';

describe ('Calculate Age Function', () => {
  it('take a postive age and return age + 1', () => {
    const result = calculateAge(5);
    expect(result).toEqual(6);
  });

  it('return 0 if input is less than -1', () => {
    const result = calculateAge(-2);
    expect(result).toEqual(0);
  })
})