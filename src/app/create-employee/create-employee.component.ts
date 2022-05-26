import { Component, OnInit, ViewChild ,AfterViewInit, ElementRef} from '@angular/core';
import { Employee } from '../employee';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee : Employee = new Employee();

  showEmailError=false;
  @ViewChild('emailInput') emailInputElement!: ElementRef<HTMLInputElement>;

  constructor(private employeeService: ServiceService, private router:Router ) { }
  dtTrigger: Subject<any>= new Subject();
  

  ngOnInit(){
  }
validateEmail(emailField:any){
  this.showEmailError=false
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


  if (reg.test(emailField) == false)
  {
    this.showEmailError=true;
    this.emailInputElement.nativeElement.focus();
    return false;
    }
    return true;
}
saveEmployee(){
  this.employeeService.createEmployee(this.employee).subscribe(data =>{
    console.log(data);
  },
  error => console.log(error));
  
}
  onSubmit(f:any){

      this.saveEmployee();
  
  }

}
