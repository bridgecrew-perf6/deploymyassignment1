import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  private _url: string = "/assets/employees.json"

  constructor(private http: HttpClient) { }
  
    getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
    }
}
