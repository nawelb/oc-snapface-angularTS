import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";


@Injectable({
   providedIn : 'root' 
})
export class FaceSnapService{

    faceSnapsArray : FaceSnap[] = [
        {
          _id:1,
          title:'Archibald',
          description:'Mon meilleur ami depuis tout petit !',
          imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          createdDate:new Date(),
          snaps:120,
          location:"Paris"
      },
      {
        _id:2,
       title: 'Three Rock Mountain',
       description:'Un endroit magnifique pour les randonnées.',
       imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
       createdDate: new Date(),
       snaps:350,
       location:"la montagne"
        },
        {
            _id:3,
       title:'Un bon repas',
       description:'Mmmh que c\'est bon !',
       imageUrl:'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
       createdDate: new Date(),
       snaps: 3
        },
        {
          _id:4,
          title:'Archibald',
          description:'Mon meilleur ami depuis tout petit !',
          imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          createdDate:new Date(),
          snaps:120,
          location:"Paris"
      },
      {
        _id:5,
       title: 'Three Rock Mountain',
       description:'Un endroit magnifique pour les randonnées.',
       imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
       createdDate: new Date(),
       snaps:350,
       location:"la montagne"
        },
        {
            _id:6,
       title:'Un bon repas',
       description:'Mmmh que c\'est bon !',
       imageUrl:'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
       createdDate: new Date(),
       snaps: 3
        }
    
      ]

      getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnapsArray;
      }
      getFaceSnapById(faceSnapId:number):FaceSnap{
        const faceSnapToFind=this.faceSnapsArray.find(faceSnap => faceSnap._id===faceSnapId);
        if (faceSnapToFind) {
            return faceSnapToFind;
        } else {
            throw new Error('FaceSnap not found');
        }
       // const faceSnapToFind=this.faceSnapsArray.find(faceSnap => faceSnap._id===faceSnapId);
      }

      snapFaceSnapById(faceSnapId:number, snaped:boolean):void{
        const faceSnapToFind=this.getFaceSnapById(faceSnapId);
        snaped === true ? faceSnapToFind.snaps-- : faceSnapToFind.snaps++
      }

}

