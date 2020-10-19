import { Component, OnInit } from '@angular/core';
import { Donuts } from '../donuts';
import { Dservice } from '../dservice.service';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent implements OnInit {

  donuts: Donuts;

  constructor(private dservice: Dservice) { }

  ngOnInit(): void {

    this.dservice.getDonuts().subscribe(
      (data: Donuts) => {
        {
          debugger;
      }
        this.donuts = data
      }
    );
  }

}
