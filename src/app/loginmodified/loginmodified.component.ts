import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RequestOptions, Headers } from '@angular/http';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import { Directive, forwardRef, Attribute, OnChanges, SimpleChanges, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginmodified',
  templateUrl: './loginmodified.component.html',
  styleUrls: ['./loginmodified.component.css']
})
export class LoginmodifiedComponent implements OnInit {
  loginForm: FormGroup;
  type = "registered_mobile_no";
  errorMessage;
  constructor(private formBuilder: FormBuilder, private route: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      type: [''],
      input_value: [''],


    })


    this.loginForm.get('type').valueChanges.subscribe(

      (type: string) => {

        if (type === 'registered_mobile_no') {

          this.loginForm.get('input_value').setValidators([Validators.required, Validators.pattern('^[7-9][0-9]{9}$')]);
          this.errorMessage = "check the Mobile no.again";

        } else if (type === 'email') {

          this.loginForm.get('input_value').setValidators([Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]);
          this.errorMessage = "check the Email again";
        }
        else if (type === 'userName') {

          this.loginForm.get('input_value').setValidators([Validators.required, Validators.pattern('^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$')]);
          this.errorMessage = "check the username again";
        }
        else if (type === 'accountNo') {

          this.loginForm.get('input_value').setValidators([Validators.required, Validators.pattern('^[0-9]{10}$')]);
          this.errorMessage = "check the Account Number again";
        }

        this.loginForm.get('input_value').updateValueAndValidity();

      }

    )

  }

  abc() {
    console.log(this.loginForm.value.type, "in")
  }
}
