import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FaceSnap } from '../models/face-snap.model';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit {

  snapForm!:FormGroup;
  faceSnapPreview$!:Observable<FaceSnap>;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
      this.snapForm=this.formBuilder.group({
        /* titleTS:[null],
        desciptionTS: [null],
        imageUrlTS:[null],
        locationTS: [null] */
        title:[null],
        description: [null],
        imageUrl:[null],
        location: [null]
      });

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
    console.log(this.snapForm.value);
  }

}
