import { Component, OnInit , AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import { DashboardServiceService } from '../dashboard-service.service';


export interface element {
  name: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
displayedColumnsBench: string[] = ['supp_name', 'supp_id', 'ltc_parts'];
  displayedColumnsAlert: string[]=['name'];
  dataSourceBench = new MatTableDataSource;
  alertData = new MatTableDataSource;
  color = '#17D2F7'
  //dataSource1=['Parts co. Contract 000061234 have just been updated']
  

 // @ViewChild(MatPaginator) paginator: MatPaginator;
  //@ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
@ViewChild(MatSort, { static: false }) sort!: MatSort;


  
ngAfterViewInit() {
  this.dataSourceBench.paginator = this.paginator;
  this.dataSourceBench.sort = this.sort;
}

constructor(private dashboardservice: DashboardServiceService) { }

ngOnInit(): void {
  this.benchData()
  this.getAlertData();
}
benchrowData:any='';
benchData(){
  this.dashboardservice.getBenchData().subscribe( (data: any)=>{
    console.log(data);
    this.benchrowData=data;
    this.dataSourceBench= new MatTableDataSource(this.benchrowData);
    this.dataSourceBench.sort=this.sort;
    this.dataSourceBench.paginator=this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Rows per page'
  })
  
}
getAlertData(){
  this.dashboardservice.getAlertData().subscribe( (data: any)=>{
    console.log(data);
    this.alertData= data
    
  })
}

}

/*const WORKBENCH_DATA: PeriodicElement[] = [
{supp_name: 'Spirit AeroSystem', supp_id: 123456789, ltc_parts: 300},
{supp_name: 'Precision Castparts Corp.', supp_id: 234567890, ltc_parts: 250},
{supp_name: 'Triumph Group', supp_id: 345678901, ltc_parts: 175},
{supp_name: 'Collins Aerospace', supp_id: 456789012, ltc_parts: 125},
{supp_name: 'Safran Cabin', supp_id: 567890123, ltc_parts: 50},


];
const ALERT_DATA:element[]=[
{name: "Parts co. Contract 000061234 have just been updated"},
{name:"Parts co. Contract 000074652 is about to expire"},
{name:"New priority parts have been added to your NOC list"},
{name:"Series 46 Contract setup complete for parts co."}
];*/
