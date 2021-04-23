import { Button } from "./Button";

export class PhoneKeypad {
    buttons: Array<Button>;
    constructor() {
        this.buttons = [
            { value: 1, allowed_destinations: [6, 8] },
            { value: 2, allowed_destinations: [7, 9] },
            { value: 3, allowed_destinations: [4, 8] },
            { value: 4, allowed_destinations: [0, 3, 9] },
            { value: 5, allowed_destinations: [] },
            { value: 6, allowed_destinations: [0, 1, 7] },
            { value: 7, allowed_destinations: [2, 6] },
            { value: 8, allowed_destinations: [1, 3] },
            { value: 9, allowed_destinations: [2, 4] },
            { value: 0, allowed_destinations: [4, 6] }
        ]
    }
    generateNumbers(max_len: number): Array<string> {
        let result = new Array<string>();
        
        for (const button of this.buttons) {            
            this.generateFollowingNumbers(result, '', max_len, button);
        }
        return result;
    }
    generateFollowingNumbers(result: Array<string>, generated_number: string, max_len: number, current_button: Button) {
        generated_number = generated_number.concat(current_button.value.toString());
        if (generated_number.length === max_len) {
            result.push(generated_number);
            return;
        }
        
        for (const dest_button_value of current_button.allowed_destinations) {
            const dest_button = this.getButton(dest_button_value);

            this.generateFollowingNumbers(result, generated_number, max_len, dest_button)
        }
    }

    private getButton(value: number):Button {
        const buttons = this.buttons.filter(x => x.value == value);
        return buttons.length > 0 ? buttons[0] : null;
    }
}