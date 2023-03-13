import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      validators: {
        validation: [
          {
            name: 'fieldMatch',
            options: {
              errorPath: 'passwordConfirm',
              password: 'password',
              confirm: 'passwordConfirm',
            },
          },
          {
            name: 'fieldMatch',
            options: {
              errorPath: 'second-passwordConfirm',
              password: 'second-password',
              confirm: 'second-passwordConfirm',
            },
          },
        ],
      },
      fieldGroup: [
        {
          key: 'password',
          type: 'input',
          props: {
            type: 'password',
            label: 'Password',
            placeholder: 'Must be at least 3 characters',
            required: true,
            minLength: 3,
          },
        },
        {
          key: 'passwordConfirm',
          type: 'input',
          props: {
            type: 'password',
            label: 'Confirm Password',
            placeholder: 'Please re-enter your password',
            required: true,
          },
        },
        {
          key: 'second-password',
          type: 'input',
          props: {
            type: 'password',
            label: 'Second Password',
            placeholder: 'Must be at least 3 characters',
            required: true,
            minLength: 3,
          },
        },
        {
          key: 'second-passwordConfirm',
          type: 'input',
          props: {
            type: 'password',
            label: 'Second Confirm Password',
            placeholder: 'Please re-enter your password',
            required: true,
          },
        },
      ],
    },
  ];

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}

/**  Copyright 2021 Formly. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://github.com/ngx-formly/ngx-formly/blob/main/LICENSE */
