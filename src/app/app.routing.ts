import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingOne } from './RoutingOne/routing-one.component';
import { RoutingTwo } from './RoutingTwo/routing-two.component';
import { RoutingThree } from './RoutingThree/routing-three.component';


const appRoutes : Routes = [
  {path : 'one' , component : RoutingOne},
  {path : 'two' , component : RoutingTwo, 
    children: [
      {path: 'three', component: RoutingThree}
    ]
  },
  {path : '' , redirectTo: '/one', pathMatch : 'full'}
]

@NgModule({
    imports:   [ 
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [ 
    RoutingOne, 
    RoutingTwo,
    RoutingThree 
  ], //Define all components that will be used here
  exports: [RouterModule]
})

export class AppRoutingModule{

}