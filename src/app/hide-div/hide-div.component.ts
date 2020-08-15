import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hide-div',
  templateUrl: './hide-div.component.html',
  styleUrls: ['./hide-div.component.css']
})
export class HideDivComponent implements OnInit {

  public name= "";

  constructor() { }
  public array = ['orange', 'mango', 'lemon'];

  ngOnInit(): void {
   var  a={};
   var b={};
   console.log(a==b);
  }

}
