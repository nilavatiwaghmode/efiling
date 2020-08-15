import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReactService {

  constructor(private http:HttpClient) { }

  insertData(employee){
    return this.http.post('http://localhost:3000/insertData', employee,{
      headers: new HttpHeaders({
        'Content-Type' :'application/json'
       })
    } )
  }

  
  getBackendData(){
    return this.http.get('http://localhost:3000/getData')
  }


  updateData(data){
    return this.http.put('http://localhost:3000/update',data ,{
      headers : new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }

  deleteData(data){
    return this.http.post('http://localhost:3000/del',data ,{
      headers : new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }

}
