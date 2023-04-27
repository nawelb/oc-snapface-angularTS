import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';
import { interval, tap } from 'rxjs';

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

  /*
    Tests de fuite de mémoire
    Créer plusieurs instance de l'observable 
    Observer la console -> probleme si observable renvoie des tableaux, ou objects volumineux
  */
  interval(1000).pipe(
    tap(console.log)
    ).subscribe();
  }
}