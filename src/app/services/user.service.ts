import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl : string  = 'https://jsonplaceholder.cypress.io/';
  constructor(private http: HttpClient) { }

  userslist(){
    return this.http.get(this.baseUrl + 'users');
  }
  
  viewUser(id :string){
    return this.http.get(this.baseUrl + 'users/' + id)
  }

  addUser(userObj: any){
    return this.http.post(this.baseUrl +'users', userObj)
  }

  updateUser(id: string, userObj: any){
    return this.http.put(this.baseUrl + 'users/'+id, userObj)
  }

  deleteUser(id: string){
    return this.http.delete(this.baseUrl + 'users/' + id)
  }
}
