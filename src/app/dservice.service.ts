import { Injectable } from '@angular/core';
import { Donuts, Result } from './donuts';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Dservice {

  constructor(private http: HttpClient) { }

  getDonuts() {

    return this.http.get<Donuts>('https://grandcircusco.github.io/demo-apis/donuts.json')

  }

  getDonut(url: string) {
    
    return this.http.get<Result>(url)

  }
}
