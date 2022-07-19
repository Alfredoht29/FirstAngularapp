import { Component, OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ServicioTestService } from '../servicio-test.service';
@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css']
})
export class RutaComponent implements OnInit {
  ne:any
  msg:any
  constructor(private http:HttpClient,private serviciotest:ServicioTestService) { }

  ngOnInit(): void {
    this.http.get("http://localhost:8080/JAXRS/api/productos/test",{responseType:'json'}).subscribe((xd:any)=>{
      this.ne=xd;
      })
      this.serviciotest.send.subscribe((data:any)=>{
        console.log("recibe",data);
        this.msg=data
      })
    }}
