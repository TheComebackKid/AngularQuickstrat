import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HelloMars } from './HelloMars/hello-mars.component';
import { DataBinding } from './DataBinding/data-binding.component';
import { StructuralDirective } from './StructuralDirectives/structural-directive.component';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    AppRoutingModule 
  ],
  declarations: [ 
    AppComponent, 
    HelloMars, 
    DataBinding, 
    StructuralDirective], //Define all components that will be used here
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
