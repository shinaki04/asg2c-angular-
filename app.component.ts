import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'User Registration';
  displayname = '';
  displayaddress = '';
  displayemail = '';
  displaycontact = '';

  getValue(name: string, address: string, email: string, contact: string, password: string) {
    this.displayname = name;
    this.displayaddress = address;
    this.displayemail = email;
    this.displaycontact = contact;
  
  }
}

