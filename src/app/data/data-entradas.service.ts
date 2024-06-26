import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataEntradasService {

  constructor(private http: HttpClient) { }

  getEntradas(): Observable<any> {

    return this.http.get('/assets/data/dataEntradas.json')

}
}
