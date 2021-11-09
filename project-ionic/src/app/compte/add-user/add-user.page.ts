import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { Users } from 'src/app/models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss'],
})
export class AddUserPage implements OnInit {
 // user: Users;

  constructor() {
  //  this.user = new Users(null, '', '', '', '');
   }

  ngOnInit() {
  }

  /*addUser(form: NgForm): void {
    alert(form.value);
    alert(this.user);
  }*/

}
