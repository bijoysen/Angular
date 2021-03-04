import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent implements OnInit {

  CheckForm: FormGroup;
  IndividualForm: FormGroup;
  MinorForm: FormGroup;
  submitted = false;
  
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.IndividualFormGroup();
    this.MinorFormGroup();
    this.CheckFormGroup();
  }

  CheckFormGroup(){
    this.CheckForm = this.formBuilder.group({
      relation: ['', Validators.required]
    });
  }

  IndividualFormGroup(){
    this.IndividualForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: [''],
      email: [''],
      address: ['']
    });
  }

  MinorFormGroup(){
    this.MinorForm = this.formBuilder.group({
      name: ['', Validators.required],
      guardianName: [''],
      phone: [''],
      email: [''],
      address: ['']
    });
  }

}
