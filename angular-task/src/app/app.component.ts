import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { KeyValuePipe } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [KeyValuePipe]
})
@Injectable()
export class AppComponent implements OnInit {
  popup = false
  name = 'Angular';
  private _jsonURL = 'assets/loans.json';
  constructor(private http: HttpClient,private keyValue: KeyValuePipe) {
   }
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  loans:any[] = [];

  ngOnInit():void {
    this.getJSON().subscribe(data => {
      data.loans;
      this.loans = data.loans;
     console.log(data.loans);
    });
    
   
  }
  
  
 }
