import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";
import { HttpClient } from "@angular/common/http";
import { Observable, map, switchMap } from "rxjs";


@Injectable({
   providedIn : 'root' 
})
export class FaceSnapService{
  constructor(private _http:HttpClient){}


      getAllFaceSnaps(): Observable<FaceSnap[]> {
        return this._http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
      } 

      getFaceSnapById(faceSnapId:Number):Observable<FaceSnap>{
       return this._http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`)
      }

      snapFaceSnapById(faceSnapId:number, snaped:boolean):Observable<FaceSnap>{
      return this.getFaceSnapById(faceSnapId).pipe(
        map(facesnap=>({
          ...facesnap,
          snaps: snaped===true ? facesnap.snaps-1 : facesnap.snaps+1
        })),
        switchMap(updatedFaceSnap => this._http.put<FaceSnap>(
          `http://localhost:3000/facesnaps/${faceSnapId}`,
          updatedFaceSnap)
        )
      )
        }


       addFaceSnap(formValue:{title:string, description:string, imageUrl:string, location:string}):Observable<FaceSnap>{
        return this.getAllFaceSnaps().pipe(
          map(facesnaps => [...facesnaps].sort((a:FaceSnap, b:FaceSnap) => a.id - b.id)),
          map(sortedFaceSnaps => sortedFaceSnaps[sortedFaceSnaps.length-1]),
          map(previousFacesnap =>({
            ...formValue,
            snaps:0,
            createdDate:new Date(),
            id: previousFacesnap.id +1
          })),
          switchMap(newFacesnap=> this._http.post<FaceSnap>('http://localhost:3000/facesnaps',newFacesnap))
        )
      } 
}


  