import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup = new FormGroup({});
  constructor(
    private UserService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      username: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
    });
  }

  createUser() {
    this.UserService.addUser(this.addUserForm.value).subscribe((data) => {
      console.log('USer Added');
    });
  }
}
