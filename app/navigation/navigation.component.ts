import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  dataSource: any;
  i:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("../../assets/notification.json").subscribe((response)=>
    {
      this.dataSource = response;
      this.i=this.dataSource.length;
    });
  }
  
  
}