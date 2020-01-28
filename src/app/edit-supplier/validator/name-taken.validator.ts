import { AbstractControl } from '@angular/forms';
import { SuppliersService } from 'src/app/services/suppliers.service';
import { map } from 'rxjs/operators';

export class ValidateNameNotTaken {

  static createValidator(suppliersService: SuppliersService) {
    
    return (control: AbstractControl) => {
      return suppliersService.checkUniqueName(control.value).pipe(
        map(res => {
          return !res ? null : { nameTaken: true };
        })
      );
    };
  }

}
