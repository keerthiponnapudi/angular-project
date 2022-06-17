import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y';
export interface PeriodicElement {
  part_desc: string;
  part_id: number;
  supp_name: string;
  supp_id: number;
  on_cont: string;
  cont: string;
  cert_status: string;
  stock: string;
  psv: string;
  factor: string;
  disc: string;
  last_po_cost: number;
  boeing_price: string;
  prod_cost: string;
  unq_sp_cost: string;
  sppc_cost: string;
  appr_cost: string;
  appr: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {part_id: 1122, part_desc: 'Titanium Widget', supp_name: 'parts Co', supp_id: 123495-12354,on_cont:'No',cont:'---',cert_status:'Ready',stock:'Yes',
   psv:'BPP',factor:'n/a',disc:'n/a',last_po_cost:22,boeing_price:'$250', prod_cost:'$100', unq_sp_cost:'n/a', sppc_cost: 'n/a', appr_cost:'n/a',appr:'n/a'  },
   {part_id: 1123, part_desc: 'Titanium Widget', supp_name: 'parts Co', supp_id: 123495-12354,on_cont:'No',cont:'---',cert_status:'Ready',stock:'Yes',
   psv:'BPP',factor:'n/a',disc:'n/a',last_po_cost:23,boeing_price:'$250', prod_cost:'$100', unq_sp_cost:'n/a', sppc_cost: 'n/a', appr_cost:'n/a',appr:'n/a'  }
];
@Component({
  selector: 'app-tool-board',
  templateUrl: './tool-board.component.html',
  styleUrls: ['./tool-board.component.css']
})
export class ToolBoardComponent implements OnInit {
   displayedColumns: string[] = ['part_id', 'part_desc', 'supp_name', 'supp_id','on_cont','cont','cert_status',
                                'stock','psv','factor','disc', 'last_po_cost','boeing_price','prod_cost','unq_sp_cost',
                                'sppc_cost','appr_cost','appr'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  constructor() { }
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  ngAfterViewInit() {
    if(this.sort){
      this.dataSource.sort = this.sort;
    }
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  ngOnInit(): void {
  }

}
