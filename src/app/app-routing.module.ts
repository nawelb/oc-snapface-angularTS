import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingPageComponentComponent } from "./landing-page-component/landing-page-component.component";
import { SingleFaceSnapComponent } from "./single-face-snap/single-face-snap.component";
import { SnapFaceListComponent } from "./snap-face-list/snap-face-list.component";

const routes: Routes=[
    {path:'facesnaps/:id', component:SingleFaceSnapComponent},
    {path: 'facesnaps', component : SnapFaceListComponent},
    {path: '', component:LandingPageComponentComponent}
]
   

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class appRoutingModule{}