import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FaceSnap } from '../models/face-snap.model';
import { Observable, map, tap } from 'rxjs';
import { FaceSnapService } from '../services/face-snap.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit {

  snapForm!:FormGroup;
  faceSnapPreview$!:Observable<FaceSnap>;
  urlRegex!:RegExp;

  constructor(private formBuilder:FormBuilder,
    private faceSnapsService:FaceSnapService,
    private router:Router) { }

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
      this.snapForm=this.formBuilder.group({
        /* titleTS:[null],
        desciptionTS: [null],
        imageUrlTS:[null],
        locationTS: [null] */
        title:[null, [Validators.required]],
        description: [null, [Validators.required]],
        imageUrl:[null,  [Validators.required, Validators.pattern(this.urlRegex)]],
        location: [null]
      }
      //Change le rythme des emissions de l'observable:
      // n'emet que lorqu'on change de champs de saisie où lors de l'appuie de la touche Tabulation
      /* , {
        updateOn: 'blur'
       } */
      );

      /*
      réactivité en temps réel-> visible avec les Observables
          Ajoutez ReactiveFormsModule aux imports d'AppModule pour débloquer les formulaires réactifs ;
          Utilisez FormBuilder pour générer un objet de type FormGroup ;
          Liez le  form  du template au FormGroup avec  [formGroup], et les  input du formulaire aux contrôles du FormGroup avec  formControlName ;
          Observez les changements de valeur du formulaire avec son ObservablevalueChanges   
       */
      this.faceSnapPreview$=this.snapForm.valueChanges.pipe(
        map(formValue=>({
          ...formValue,
          createdDate:new Date(),
          snaps:0,
          id:0
        }))
      )
  }

  onSubmitForm():void{
    this.faceSnapsService.addFaceSnap(this.snapForm.value).pipe(
      tap(()=> this.router.navigateByUrl('/facesnaps'))
    ).subscribe();
    //this.faceSnapsService.addFaceSnap(this.snapForm.value);
    //this.router.navigateByUrl('/facesnaps');
    //console.log(this.snapForm.value);
  }

}
