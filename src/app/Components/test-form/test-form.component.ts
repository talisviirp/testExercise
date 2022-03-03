import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { emailValidator, nameValidator, workExperienceValidator } from './validators';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent implements OnInit {

  constructor() {}
  ngOnInit(): void {}
  showError: boolean = false;
  errorInfo: boolean = false;
  successInfo: boolean = false;
  resetInfo: boolean = false;

  textColor: string = 'white'

  success = '#4caf50'

  error = '#e53935'

  info = '#2196f3'

  public profileForm = new FormGroup({
    name: new FormControl('', {
      validators: [nameValidator('Name', 3, 20)],
      // updateOn: 'blur',
    }),
    surname: new FormControl('', {
      validators: [nameValidator('Surname', 3, 20)],
      // updateOn: 'blur',
    }),
    email: new FormControl('', {
      validators: [emailValidator('Email')],
      // updateOn: 'blur',
    }),
    workExperience: new FormControl('', {
      validators: [workExperienceValidator('Work Experience', 1)],
      // updateOn: 'blur',
    }),
  })


  onSubmit() {
    this.showError = true

    // console.warn(this.profileForm.value)
    // console.log(this.profileForm.controls);

    if (!this.profileForm.valid) {
      this.errorInfo = true
      this.resetInfo = false
      this.successInfo = false
    } else {
      this.successInfo = true
      this.errorInfo = false
      this.resetInfo = false
    }
  }
  onReset() {
    this.profileForm.reset()
    // console.warn(this.profileForm.value)
    // console.log(this.profileForm.controls);
    this.showError = false
    this.errorInfo = false
    this.successInfo = false
    this.resetInfo = true
  }
}
