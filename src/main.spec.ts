import { PhoneKeypad } from './PhoneKeypad';
test('Dial with n=1', () => {
    //arrange
    const keypad = new PhoneKeypad();
    
    //act
    var actual = keypad.generateNumbers(1);
    
    //check
    expect(actual.length).toBe(10);
})