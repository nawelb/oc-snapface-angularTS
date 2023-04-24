import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page-component',
  templateUrl: './landing-page-component.component.html',
  styleUrls: ['./landing-page-component.component.scss']
})
export class LandingPageComponentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onContinue():void{
    this.router.navigateByUrl('facesnaps')
  }
}
