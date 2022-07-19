import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
nom='';
  clickme(name:string){
     this.nom=name;
  }
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
   // this.http.post<any>('http://localhost:8888/pos',{xd:'test'}).subscribe()
  }
}

