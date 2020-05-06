import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class EntityService {

  constructor(private http: HttpClient) { }

  getEntities(){
    console.log('----from loadentities action service------------->');
    return this.http.get('http://localhost:3000/employees');
  }
  createEntity(){
    //console.log('----from loadentities action service------------->');
    return this.http.post('http://localhost:3000/employees',{"first_name":"Pavan","last_name":"raju","email":"raju.pavan270@gmail.com"});
  }
}
