import { Component, OnInit } from '@angular/core';
import { DataService, User } from '../services/data.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  users$: Observable<User[]> | undefined;
  error: string = '';
  mostrandoSoloUno: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    this.mostrandoSoloUno = false;
    this.users$ = this.dataService.getUsers().pipe(
      catchError(err => {
        this.error = 'Error al cargar los usuarios.';
        console.error(err);
        return of([]);
      })
    );
  }

  cargarUsuario1(): void {
    this.mostrandoSoloUno = true;
    this.users$ = this.dataService.getUserById(1).pipe(
      catchError(err => {
        this.error = 'Error al cargar el usuario.';
        console.error(err);
        return of(null);
      }),
      map(user => user ? [user] : [])
    );
  }

  alternarLista(): void {
    if (this.mostrandoSoloUno) {
      this.cargarUsuarios();
    } else {
      this.cargarUsuario1();
    }
  }

}

