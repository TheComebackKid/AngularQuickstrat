import { Injectable } from '@angular/core';
import { Planet } from './plane.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PlanetService {
    /*static MOCK_PLANETS = [
        new Planet (0, 'Mercury'),
        new Planet (1, 'Venus' ),
        new Planet (2, 'Mars' ),
        new Planet (3, 'Earth' )
    ]*/

    

    /*getPlanets() : Planet[] {
        return PlanetService.MOCK_PLANETS;
    }*/

    static API_URL = 'https://angulartrainingbackend.firebaseio.com/planets.json'

    //Use Http Client
    constructor(private http : Http){}

    //GET
    getPlanets() : Observable<Planet[]>{
        return this.http.get(PlanetService.API_URL).map(res => {
            let json = res.json();
            let planets = [];
            if(json){
                for (let key of Object.keys(json)){
                    planets.push(json[key]);
                }
            }
            return planets;
        })
    }

    //POST
    save(planet : Planet) : Observable<Response> {
        return this.http.post(PlanetService.API_URL, planet);
    }
}