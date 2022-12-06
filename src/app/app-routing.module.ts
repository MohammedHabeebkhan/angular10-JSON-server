import { AddUserComponent } from './users/add-user/add-user.component';
import { DeletUserComponent } from './users/delet-user/delet-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ViewUserComponent } from './users/view-user/view-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users/users-list/users-list.component';

const routes: Routes = [
  {path:'users',
children:[
  {path: '', component: UsersListComponent},
  {path: 'list', component: UsersListComponent},
  {path: 'view/:id', component: ViewUserComponent},
  {path: 'edit/:id', component:EditUserComponent},
  {path: 'delete/:id', component: DeletUserComponent},
  {path:'create', component: AddUserComponent}
  
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
