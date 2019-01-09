import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';
import { BasicService } from 'src/app/services/basic.service';
import { ToastrService } from 'ngx-toastr';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from 'src/app/services/auth.service';
import { longStackSupport } from 'q';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  currentUser: any;
  constructor(private services: BasicService, private auth: AuthService, private router: Router) {}
  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.user = {
      Username: '',
      Password: '',
      Email: ''
    }
  }
  loginUser() {
    this.auth.login(this.user.Username,this.user.Password);
  }
}
