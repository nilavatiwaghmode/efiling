import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(data){
    console.log(data.value);
  }

}