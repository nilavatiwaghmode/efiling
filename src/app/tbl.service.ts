import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TblService {

  constructor(private http:HttpClient) { }
   getservice(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
   }

  insertData(myData){
    return this.http.post('http://localhost:3000/insertData', myData,{
      headers: new HttpHeaders({
        'Content-Type' :'application/json'
       })
    } )
  }

  getBackendData(){
    return this.http.get('http://localhost:3000/getData')
  }

  deleteData(data){
    return this.http.post('http://localhost:3000/del',data ,{
      headers : new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }

  updateData(data){
    return this.http.put('http://localhost:3000/update',data ,{
      headers : new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }
}
