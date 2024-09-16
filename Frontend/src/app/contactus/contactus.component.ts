import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {

  formData = {
    name: '',
    email: '',
    message: ''
  };

  constructor() {}

  validateAndSubmit(form: HTMLFormElement) {
    if (this.formData.name && this.formData.email && this.formData.message) {
      form.submit();  // Submit the form to Formspree
    } else {
      alert('Please fill out all fields');
    }
  }
}
