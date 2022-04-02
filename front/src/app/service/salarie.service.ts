import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Salarie } from 'src/app/models/salarie';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class SalarieService {
  public addProductEmitter$ = new Subject();
  constructor(private http: HttpClient) {}

  public getAllSalarie(): Observable<Salarie[]> {
    return this.http.get<Salarie[]>(`${environment.API_URL}/api/list-salarie`);
  }
  public addSalarie(payload: any) {
    return this.http.post<any>(
      `${environment.API_URL}/api/add-salarie`,
      payload
    );
  }
}
