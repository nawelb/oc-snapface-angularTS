import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  //facesnap!:FaceSnap;
  facesnap$!:Observable<FaceSnap>;
  snaped!:boolean;
  button!:string;
constructor(private _faceSnapService:FaceSnapService, private route:ActivatedRoute){
}
ngOnInit(){
  const faceSnapId = +this.route.snapshot.params['id'];
  this.facesnap$=this._faceSnapService.getFaceSnapById(faceSnapId);
  this.snaped=false;
  this.button="Oh Snap!";
}

OnSnap(faceSnapId:number){
   this._faceSnapService.snapFaceSnapById(faceSnapId, this.snaped);
  if(this.snaped){
    this.facesnap$ = this._faceSnapService.snapFaceSnapById(faceSnapId,true).pipe(
      tap(() => {
        this.button="Oups, un snap!";
      this.snaped=false;
      }
      ))}
      else{
        this.facesnap$ = this._faceSnapService.snapFaceSnapById(faceSnapId, false).pipe(
          tap(() => {
            this.button = 'Oh Snap!';
            this.snaped=true;
        })
      );
      }
};
    

}
