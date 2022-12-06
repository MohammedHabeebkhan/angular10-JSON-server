import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
    
   userslist : any;
  constructor(private UserService : UserService) { }

  ngOnInit(): void {
   this.UserService.userslist().subscribe(data=>{
       this.userslist = data;
   })
  }

}
