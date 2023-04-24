import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-snap-face-list',
  templateUrl: './snap-face-list.component.html',
  styleUrls: ['./snap-face-list.component.scss']
})
export class SnapFaceListComponent implements OnInit {

  faceSnaps!:FaceSnap[];
  constructor( private _facesnapService : FaceSnapService) { }

  ngOnInit(): void {
  this.faceSnaps=this._facesnapService.getAllFaceSnaps();
  }
}