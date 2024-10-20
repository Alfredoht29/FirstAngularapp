import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicioTestService } from './servicio-test.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestApp';
  public arr: Array<any> = []
  constructor(private http: HttpClient, private serviciotest: ServicioTestService) { }

  ngOnInit() {
    /*  this.http.get("http://localhost:8888/hola",{responseType:'text'}).subscribe((resp:any)=>{
        this.vari=resp;
      })*/
    this.arr = [{
      nom: "xd",
      fam: "perez"
    }]
  }
  cen(){
    console.log(this.arr)
    this.serviciotest.send.emit(this.arr)
  }
}

