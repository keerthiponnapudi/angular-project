import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-board',
  templateUrl: './tool-board.component.html',
  styleUrls: ['./tool-board.component.css']
})
export class ToolBoardComponent implements OnInit {
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
