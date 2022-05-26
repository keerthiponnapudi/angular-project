import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private url ='http://localhost:8080/';

  constructor( private httpClient: HttpClient ) { }


  getEmployeeList():Observable<any>{
    return this.httpClient.get(`${this.url}`+'employee');
  }

  getEmployeeById(id:any):Observable<any>{
    return this.httpClient.get(`${this.url}`+'employee/'+id);
  }

  
  createEmployee(emp:any){
    let emps= JSON.parse(JSON.stringify(emp));
    return this.httpClient.post(`${this.url}`+'employees',emps);
  } 

  deleteEmployee(id:any){
    return this.httpClient.delete(`${this.url}`+'employee/'+id);
  }
  
  updateEmployee(emps:any){
    return this.httpClient.put(`${this.url}`+'employees',emps);
  }
  uploadExcel(file:any){
    return this.httpClient.post(`${this.url}`+'fromExcel',file);
  }
  downloadExcel(){
    return this.httpClient.delete(`${this.url}`+'toExcel');

  }
}
