var add = require("../math.js");

test('Fake test', () => {
    expect(true).toBeTruthy();
   });

test('add function adds two arguments: ', () => {
    expect(add(1,1)).toEqual(2);
})
describe('Setting up jest', () => {
    it('adds numbers', () => {
      expect(add(1, 2)).toEqual(3);
      expect(add(2, 3)).toEqual(5);
    });
   });