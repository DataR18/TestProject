import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ConatctInfo } from '../../globa/models/contact_info';

@Injectable({
  providedIn: 'root'
})
export class ContactInfoService {

  private http = inject(HttpClient);


  getConatctInfo(): Observable<ConatctInfo> {
    return this.http.get<ConatctInfo>('/data/info-contacto.json')
    .pipe(
      map(data => data)
    )
  }
}
