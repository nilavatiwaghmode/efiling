import { Component, OnInit } from '@angular/core';
import { TblService } from '../tbl.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data:any;
 
  cols = [
    { field: 'id', header: 'id' },
    { field: 'title', header: 'title' },
    { field: 'body', header: 'body' },
    // { field: 'color', header: 'Color' }
];
  constructor(private table:TblService) {
    this.table.getservice().subscribe( res=>{

      console.log(res)
      this.data=res
      console.log(this.data)
    })
   }

  ngOnInit(): void {
  }
 

}
