import { Injectable } from '@angular/core';
import { Cshalloffame, Complete, Tiny } from './cshalloffame';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HalloffameService {

  constructor(private http: HttpClient) { }

  getHallOfFame () {

    return this.http.get<Cshalloffame>('https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json')

  }

}
