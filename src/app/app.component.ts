import { Component, Input, OnInit } from '@angular/core';
import { Observable, interval, map } from 'rxjs';

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
      map(value=>value%2===0 ? "paire" : "impaire")
    ); 
  }


}
