import { Component, OnInit } from '@angular/core';
import { Cshalloffame } from '../cshalloffame';
import { HalloffameService } from '../halloffame.service';
@Component({
  selector: 'app-famouspeople',
  templateUrl: './famouspeople.component.html',
  styleUrls: ['./famouspeople.component.css']
})
export class FamouspeopleComponent implements OnInit {

  cshalloffame: Cshalloffame
  constructor(private halloffameservice: HalloffameService) { }

  ngOnInit(): void {

    this.halloffameservice.getHallOfFame().subscribe(
      (data: Cshalloffame) => {
        this.cshalloffame = data
      }
    );
  }

}
