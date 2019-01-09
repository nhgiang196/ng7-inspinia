import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: User;
  redirectUrl: string;
  isLoggedIn = false;
  constructor(private http: HttpClient,private router:Router) {
    this.currentUser={
      Username:'',
      Password:'',
      Email:''
    }
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.isLoggedIn = false;
    this.router.navigateByUrl('login');
  }
  login(username: string, password: string) {
    return this.http.get('api/HSSE/ValidateUser',{
      params:{
        username: username,
        password: password
      }
    }).toPromise().then((res:any)=>{
        if(res.username !='')
        {
          this.currentUser.Username = res.username;
          this.currentUser.Email = res.email;
          debugger;
          localStorage.setItem('currentUser',JSON.stringify(this.currentUser));
          this.isLoggedIn = true;
          this.router.navigateByUrl('mainView')
        }
    })
  }
}
