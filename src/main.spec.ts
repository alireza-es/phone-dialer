import { PhoneKeypad } from './PhoneKeypad';
test('Dial with n=1', () => {
    //arrange
    const keypad = new PhoneKeypad();
    
    //act
    var actual = keypad.generateNumbers(1);
    
    //check
    expect(actual.length).toBe(10);
})

test('Dial with n=2', () => {
    //arrange
    const keypad = new PhoneKeypad();

    //act
    var actual = keypad.generateNumbers(2);

    //check
    expect(actual.length).toBe(20);
})


test('Dial with n=3', () => {
    //arrange
    const keypad = new PhoneKeypad();

    //act
    var actual = keypad.generateNumbers(3);

    //check
    expect(actual.length).toBe(46);
})

test('Dial with n=4', () => {
    //arrange
    const keypad = new PhoneKeypad();

    //act
    var actual = keypad.generateNumbers(4);

    //check
    expect(actual.length).toBe(104);
})

// test('Dial with n=21', () => {
//     //arrange
//     const keypad = new PhoneKeypad();

//     //act
//     var actual = keypad.generateNumbers(21);

//     //check
//     expect(actual.length).toBe(136006598);
// })