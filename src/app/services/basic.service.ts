import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Token } from '@angular/compiler';

const TOKEN ='TOKEN';
@Injectable({
  providedIn: 'root'
})
export class BasicService {

  currentUser: User;
  ls:User[];
  
  baseUrl = 'http://localhost:9004/api/HSSE'
  constructor(private http: HttpClient) { }

  setToken(token:string):void{
    localStorage.setItem(TOKEN,token)
  }
  isLogged()
  {
    return localStorage.getItem(TOKEN) !=null;
  }
  
 
}
