import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css']
})
export class RutaComponent implements OnInit {
  xd=''
  ne:any
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:8080/JAXRS/api/productos/test",{responseType:'json'}).subscribe((xd:any)=>{
      this.ne=xd;
      console.log(this.ne)
      })
    }}
