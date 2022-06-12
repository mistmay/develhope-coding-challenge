import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function NoSpaceValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
        let check: boolean = false;
        String(value).split('').forEach((word: string) => {
            if (word === ' ') {
                check = true;
            }
        });
        if (!check) {
            return null;
        } else {
            return { containsWhiteSpace: true };
        }
    }
}