import { Component, Input, OnInit } from '@angular/core';
import { Observable, filter, interval, map, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'snapface';
  interval$!:Observable<string> 


  ngOnInit(){
    this.interval$ = interval(1000).pipe(
      filter(value=> value%3===0),
      map(value=>value%2===0 ? value+" paire" : value+" impaire"),
      tap(text => this.logger(text))
    ); 
  }



  logger(text:string){
    // pas de modification de l'observable, add "log :"
    console.log(`log :  ${text}`);
  }
}
