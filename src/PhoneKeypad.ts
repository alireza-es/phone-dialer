import { Button } from "./Button";

export class PhoneKeypad {
    currentButton: Button;
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
    generateNumbers(n: number) : Array<string> {
        return [];
    }
}