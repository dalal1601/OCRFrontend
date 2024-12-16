import { Component } from '@angular/core';
import {UserModel} from '../models/user.model';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user = new UserModel();
  onLoggedin(){
    console.log(this.user);
  }

}
