import { Component } from '@angular/core';

@Component({
    selector: 'data-binding',
    templateUrl: './data-binding.component.html',
    styleUrls: ['./data-binding.component.css']
})

export class DataBinding {
    name = "Earth";
    myNumber : number = 0;

    showMyNumber(){
        alert(this.myNumber);
    }

    getClasses(){
        return {
            positive: this.myNumber > 0,
            negative: this.myNumber < 0
        };
    }
}