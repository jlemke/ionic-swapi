import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, empty, merge } from 'rxjs';
import { expand } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private httpSvc: HttpClient) { }

  public getPlanets() {
    console.log('getPlanets()');

    /*
    const pages = [
      this.httpSvc.get('https://swapi.co/api/planets/'),
      this.httpSvc.get('https://swapi.co/api/planets/?page=2'),
      this.httpSvc.get('https://swapi.co/api/planets/?page=3'),
      this.httpSvc.get('https://swapi.co/api/planets/?page=4'),
      this.httpSvc.get('https://swapi.co/api/planets/?page=5'),
      this.httpSvc.get('https://swapi.co/api/planets/?page=6'),
      this.httpSvc.get('https://swapi.co/api/planets/?page=7')
    ];

    return merge(...pages);
    */

    
    return this.httpSvc.get('https://swapi.co/api/planets/')
      .pipe(expand(
        (data, i) => (<any> data).next ? this.httpSvc.get((<any> data).next) : empty()
      ));
    

  }

  public processPlanets() {
    
  }

}
