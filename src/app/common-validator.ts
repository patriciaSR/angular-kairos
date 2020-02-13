import { FormControl } from '@angular/forms';

export class CommonValidator {

  static startWithNumber(control: FormControl) {

    const firstChar = control.value.charAt(0);
    if (firstChar && !isNaN(firstChar)) {
      return { startWithNumber: true };
    } else {
      return null;
    }

  }
}
