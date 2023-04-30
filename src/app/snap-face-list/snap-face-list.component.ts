import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';
import { Subject, interval, take, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-snap-face-list',
  templateUrl: './snap-face-list.component.html',
  styleUrls: ['./snap-face-list.component.scss']
})
export class SnapFaceListComponent implements OnInit, OnDestroy {

  faceSnaps!:FaceSnap[];
  private destroy$!:Subject<boolean>;
  constructor( private _facesnapService : FaceSnapService) { }

   ngOnInit(): void {
    this.destroy$ = new Subject<boolean>();
    this.faceSnaps=this._facesnapService.getAllFaceSnaps();

  /*
    Tests de fuite de mémoire
    Créer plusieurs instance de l'observable 
    Observer la console -> probleme si observable renvoie des tableaux, ou objects volumineux
  */
  interval(1000).pipe(
  
    //opérateur take dénombre le nombre d'évenement à observer avant d'arreter l'observable pour éviter les fuites de mémoire -> ici 3
    //take(3),
    tap(console.log),
    takeUntil(this.destroy$)
    ).subscribe();
  }

  ngOnDestroy(): void {
   this.destroy$.next(true);
  }

}