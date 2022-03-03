import { AbstractControl, ValidationErrors } from "@angular/forms";

export function nameValidator(
  controlName: string,
  minlength: number,
  maxlength: number
) {
    return (control: AbstractControl): ValidationErrors | null => {
      let pattern = '^[a-zA-Z]{' + minlength + ',' + maxlength + '}([\w ]+)*$';
      return !control.value
        ? {error: true, message: `${controlName} is required` }
        : !control.value.match(new RegExp(pattern))
        ? {
          error: true,
          message: `${controlName} must contain only alphabets - no spaces. Min no is ${minlength} and the Max is ${maxlength}`,
        }
        : null;
    }
  }

export function emailValidator(controlName: string) {
  return (control: AbstractControl): ValidationErrors | null => {
    return !control.value
      ? { error: true, message: `${controlName} is required` }
      : !control.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      ? { error: true, message: `${controlName} is invalid` }
      : null
  }
}

export function workExperienceValidator(
  controlName: string,
  // minlength: number,
  maxlength: number,

) {

  return (control: AbstractControl): ValidationErrors | null => {
    let pattern = '^[0-9]{1,3}[, ]*[0-9]{0,' + maxlength + '}$';
    return !control.value
    ? {error: true, message: `${controlName} is required` }
    : !control.value.match(new RegExp(pattern))
    ? {
      error: true,
      message: `${controlName} must be a number. Max length after comma is ${maxlength}`,
    }
    : null
  }

}
