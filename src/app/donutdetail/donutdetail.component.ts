import { Component, OnInit, Input } from '@angular/core';
import { Result } from '../donuts';



@Component({
  selector: 'app-donutdetail',
  templateUrl: './donutdetail.component.html',
  styleUrls: ['./donutdetail.component.css']
})
export class DonutdetailComponent implements OnInit {

  @Input() myResult: Result;

  constructor() { }

  ngOnInit(): void {

  }

}
