import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  userDetails: any;
  userId: string = '';
  editUserDetails: FormGroup = new FormGroup({});
  dataLoaded: boolean = false;
  constructor(
    private UserService: UserService,
    private FormBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.dataLoaded = false;
    this.activatedRoute.params.subscribe((data) => {
      this.userId = data['id'];
    });
    if (this.userId) {
      this.UserService.viewUser(this.userId)
        .toPromise()
        .then((data) => {
          this.userDetails = data;
          this.editUserDetails = this.FormBuilder.group({
            username: new FormControl(this.userDetails.name),
            email: new FormControl(this.userDetails.email),
            phone: new FormControl(this.userDetails.phone),
          });
          this.dataLoaded = true;
        });
    }
  }

  updateUser() {
    this.UserService.updateUser(this.userId, this.editUserDetails.value).subscribe((data) => {
      console.log('User Updated');
    });
  }
}
