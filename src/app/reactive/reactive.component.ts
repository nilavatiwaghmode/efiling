import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, } from '@angular/forms';
import { ReactService } from '../react.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  registrationForm: FormGroup;
  employee:any;
  dataList:any;
  constructor(private fb:FormBuilder,private reactSer:ReactService, private toastr:ToastrService) { 
   
  }
 

  ngOnInit(): void {
    this.getData();
    this.registrationForm = this.fb.group({
      name:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required]
    })
    
  }
  onSubmit(){
    // console.log(registrationForm)
    this.employee=this.registrationForm.value
    this.reactSer.insertData(this.employee).subscribe((res)=>{
      console.log(res);
      this.toastr.success('Inserted successfully', 'EMP. Register');
      this.registrationForm.reset();
    })
  }


  getData(){
    this.reactSer.getBackendData().subscribe((res)=>{
      this.dataList=res;
    })
  }
  

  onEdit(data){
this.reactSer.updateData(data).subscribe((res)=>{
  this.registrationForm.controls['name'].setValue(data.name);
  this.registrationForm.controls['email'].setValue(data.email);
  this.registrationForm.controls['password'].setValue(data.password);
 
})

  }

  deleteData(id){
    console.log(id);
    let data={
      '_id':id
    }
    this.reactSer.deleteData(data).subscribe(
      (res)=>{console.log(res)
        this.getData();
      }
    )
  
  }
}
