import { Component, OnInit } from '@angular/core';
import { PlanetService } from './Services/planet.service';
import { Planet } from './Services/plane.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [PlanetService]
})
export class AppComponent implements OnInit  { 
  name = 'ASD'; 
  planets : Planet [];
  currentPlanet = new Planet(0, '');

  constructor(private planetService : PlanetService){}
  
  ngOnInit() {
      //this.planets = this.planetService.getPlanets();
      this.loadPlanets();
  }

  loadPlanets(){
    this.planetService.getPlanets().subscribe(
        planets => {
           this.planets = planets 
          }, 
        error => {
           alert(error)
          } 
      );
  }

  //Save planets here
  save(){
    this.planetService.save(this.currentPlanet).subscribe(
      () => {
        this.currentPlanet = new Planet(0, '');
        this.loadPlanets();
      })
  }
}
