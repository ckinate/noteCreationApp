import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { observable, Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router) { }
  model: any ={};
  currentUser$: Observable<User| null> = new Observable<User>();


  ngOnInit(): void {

    this.currentUser$ = this.accountService.currentUser$
  }
 login(){
   this.accountService.login(this.model).subscribe(response =>{
     this.router.navigateByUrl('/noteCreate')
     console.log(response);

   }
   )
 }

 logout(){
   this.accountService.logout();
   this.router.navigateByUrl('/');

 }

}
