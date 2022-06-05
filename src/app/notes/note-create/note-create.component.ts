import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NoteCreateComponent implements OnInit {
 model: any = {};
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }
  createNote(){
    console.log(this.model);-
    this.accountService.createNote(this.model).subscribe(response=>{
      console.log(response);
    })
  }

}
