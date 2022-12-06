import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delet-user',
  templateUrl: './delet-user.component.html',
  styleUrls: ['./delet-user.component.scss']
})
export class DeletUserComponent implements OnInit {

  userId: string = '';
  constructor(private UserService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.userId = data['id'];
    })
    if(this.userId){
      this.UserService.deleteUser(this.userId).subscribe(data=>{
        console.log("User Deleted")
      })
    }
  }

}
