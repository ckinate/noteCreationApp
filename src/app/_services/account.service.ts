import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl ="https://note-xyz.herokuapp.com/api/v1/";
  private currentUserSource = new ReplaySubject<User | null>(1);
  currentUser$ = this.currentUserSource.asObservable();



  constructor(private http:HttpClient) { }

  login(model:any){
   return this.http.post<User>(this.baseUrl + "user/login", model).pipe(map((response:  User)=>{
    const user = response;
    if(user){
     localStorage.setItem("user",JSON.stringify(user));
     this.currentUserSource.next(user);
    }
   }));
  }
  setCurrentUser(user:User){
    this.currentUserSource.next(user);
  }
  logout(){
    localStorage.removeItem("user");
    this.currentUserSource.next(null);

  }
  register(model:any){
 return this.http.post<User>(this.baseUrl + "user/", model).pipe(map(user=>{
   if(user){
     localStorage.setItem('user',JSON.stringify(user));
     this.currentUserSource.next(user);
   }
 }))
  }
  createNote(model: any){
  return this.http.post(this.baseUrl + "note/", model);
  }
}
