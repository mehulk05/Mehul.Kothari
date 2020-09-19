import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { AboutDTO } from '../dto/about-dto';
import { HeaderDTO } from '../dto/header-dto';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getHeader(): Observable<HeaderDTO>{
    let result = this.httpClient.get<HeaderDTO>(environment.apiUrlHeaderGet);
    return result;
  }

  public getAbout(): Observable<AboutDTO>{
    let result = this.httpClient.get<AboutDTO>(environment.apiUrlAboutGet);
    console.log(result);
    return result;
  }

}
