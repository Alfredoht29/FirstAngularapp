import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioTestService {
  @Output() send: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
