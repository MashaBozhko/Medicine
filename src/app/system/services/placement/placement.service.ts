import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Placement } from '../models/placement.model';

@Injectable({
  providedIn: 'root'
})
export class PlacementService {

  constructor(private http: HttpClient) { }

   findOne(id: number)  {
    
    return this.http.get<any>(environment.API + '/get_placements/' + id);
  }

  find(): Observable<any[]> {

    return this.http.get<any[]>(environment.API + '/get_placements/')
  }
}
