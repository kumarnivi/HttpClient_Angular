import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RegisterForm';

  onSubmit(form: any) {
    if (form.valid) {
      // Form is valid, handle submission
      console.log(form.value);
    } else {
      // Form is invalid, display error messages
      console.log('Form is invalid');
    }
  }
}
