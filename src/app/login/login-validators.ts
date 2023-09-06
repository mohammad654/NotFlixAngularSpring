import { AbstractControl, ValidationErrors } from '@angular/forms';


export class LoginValidators{

    static shouldBeUnique(control: AbstractControl):ValidationErrors | null {
      if (control.value=="mohammad")
        return { shouldBeUnique: true };
      else
          return null;
    }


}
