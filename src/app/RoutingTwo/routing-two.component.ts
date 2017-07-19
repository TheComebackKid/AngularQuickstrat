import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './routing-two.component.html'
})

export class RoutingTwo implements OnInit{
    id : number;
    
    constructor(private route : ActivatedRoute){}
    
    ngOnInit(){
        
    }
}