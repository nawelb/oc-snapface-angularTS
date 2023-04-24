import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  facesnap!:FaceSnap;
  
  snaped!:boolean;
  button!:string;
constructor(private _faceSnapService:FaceSnapService, private route:ActivatedRoute){
}
ngOnInit(){
  const faceSnapId = +this.route.snapshot.params['id'];
  this.facesnap=this._faceSnapService.getFaceSnapById(faceSnapId);
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

}
