import { Component, OnInit } from '@angular/core';
import { TblService } from '../tbl.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private tblSer: TblService) { }
  listData:any;
  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.tblSer.getBackendData().subscribe(
      (res)=>{this.listData=res;
      console.log(this.listData)
    }
    )
  }

}
