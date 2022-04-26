import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service } from 'src/model/service/service.model';


@Injectable({
  providedIn: 'root'
})
export class LashService {
  public jsonServerURL = 'http://localhost:3000/service';

  constructor(public httpClient: HttpClient) { }

  getService(): Observable<Service[]> {
    return this.httpClient.get<Service[]>(this.jsonServerURL);
  }

}
