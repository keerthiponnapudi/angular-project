import { Component, OnInit,  ViewChild ,AfterViewInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id:any;
  employee:any;
  showEmailError=false;
  @ViewChild('emailInput') emailInputElement!: ElementRef<HTMLInputElement>;
  constructor( private _Activatedroute:ActivatedRoute, private empservice: ServiceService, private router: Router) { 
  }

  ngOnInit(): void {
    this.id=this._Activatedroute.snapshot.params['id'];
    let emps= this.empservice.getEmployeeById(this.id).subscribe(
      (result) =>{
        console.log(result);
        this.employee=result;
      }
    )
  
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
  onSubmit(){
    this.empservice.updateEmployee(this.employee).subscribe(                    
      (result) =>{console.log(result);
      this.router.navigate(['/employees']);
    })
  }

}
