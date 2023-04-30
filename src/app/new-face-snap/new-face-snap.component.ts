import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit {

  snapForm!:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
      this.snapForm=this.formBuilder.group({
        titleTS:[null],
        desciptionTS: [null],
        imageUrlTS:[null],
        locationTS: [null]
      });
  }

  onSubmitForm():void{
    console.log(this.snapForm.value);
  }

}
