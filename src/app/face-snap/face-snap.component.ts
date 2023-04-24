import { Component,Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() facesnap!:FaceSnap;
  
  snaped!:boolean;
  button!:string;
constructor(private _faceSnapService:FaceSnapService, private _router:Router){
}
ngOnInit(){
  this.snaped=false;
  this.button="Oh Snap!";
}

OnSnap(){
  this._faceSnapService.snapFaceSnapById(this.facesnap._id, this.snaped);
  if(this.snaped){
    this.button="Oups, un snap!"
    this.snaped=false;
  }else{
    this.button="Oh Snap!"
    this.snaped=true;
  }
  
}

onViewFaceSnap(){
  this._router.navigateByUrl('facesnaps/'+this.facesnap._id);
 }
}
