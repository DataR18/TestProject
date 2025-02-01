import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Slider } from '../../globa/models/slider';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

    private http = inject(HttpClient);
  
    getSliders(): Observable<Slider[]> {
       return this.http.get<Slider[]>('/data/slider.json')
          .pipe(
            map(data => data)
          )
    }
  
}
