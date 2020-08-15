import { Component, OnInit } from '@angular/core';
import { TblService } from '../tbl.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private tblSer:TblService) { }
formData:any;
listData:any;
name:any;
email:any;
pass:any;
idd:any;
mobile:any;
updatedData:any;
  ngOnInit(): void {
    this.getData();
  }

  onSubmit(data){    
    console.log(data.value);
    // console.log("hello");
    
    this.formData={
      'name':data.value.nm,
      '_id':data.value.id,
      'email':data.value.el,
      'password':data.value.pw,
      'number':data.value.mb
    }
    // console.log(this.formData)
    this.tblSer.insertData(this.formData).subscribe(
      (res)=>{console.log(res),
      (err)=>console.log(err)
      this.getData();
    }
    )
  }
  getData(){
    this.tblSer.getBackendData().subscribe(
      (res)=>{this.listData=res;
      console.log(this.listData)
    }
    )
  }

  showUpdateData(data){
    console.log(data);
    this.idd=data._id;
    this.name=data.name;
    this.email=data.email;
    this.mobile=data.number;
    this.pass=data.password;

  }

updateUser(){

  this.updatedData={
    '_id':this.idd,
    'name':this.name,
    'email':this.email,
    'password':this.pass,
    'number':this.mobile
  }

  console.log(this.updatedData);
  this.tblSer.updateData(this.updatedData).subscribe(
    (res)=>{
      console.log(res);
      location.reload();  //clear all field
    }
  )

}

//delete data
deleteData(id){
  console.log(id);
  let data={
    '_id':id
  }
  this.tblSer.deleteData(data).subscribe(
    (res)=>{console.log(res)
      this.getData();
    }
  )

}



}
