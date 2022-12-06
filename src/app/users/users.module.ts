import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import {MatTableModule} from '@angular/material/table';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';

import {MatListModule} from '@angular/material/list';
import { ViewUserComponent } from './view-user/view-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeletUserComponent } from './delet-user/delet-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  declarations: [
    UsersListComponent,
    ViewUserComponent,
    EditUserComponent,
    DeletUserComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule

    
  ]
})
export class UsersModule { }
