import { Component, OnInit , AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {

  displayedColumns: string[] = ['supp_name', 'supp_id', 'ltc_parts'];
  dataSource = new MatTableDataSource<PeriodicElement>(WORKBENCH_DATA);
  color = '#17D2F7'
  

 // @ViewChild(MatPaginator) paginator: MatPaginator;
  //@ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
@ViewChild(MatSort, { static: false }) sort!: MatSort;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
export interface PeriodicElement {
  supp_name: string;
  supp_id: number;
  ltc_parts: number;
}
const WORKBENCH_DATA: PeriodicElement[] = [
  {supp_name: 'Spirit AeroSystem', supp_id: 123456789, ltc_parts: 300},
  {supp_name: 'Precision Castparts Corp.', supp_id: 234567890, ltc_parts: 250},
  {supp_name: 'Triumph Group', supp_id: 345678901, ltc_parts: 175},
  {supp_name: 'Collins Aerospace', supp_id: 456789012, ltc_parts: 125},
  {supp_name: 'Safran Cabin', supp_id: 567890123, ltc_parts: 50},
  
  
];
