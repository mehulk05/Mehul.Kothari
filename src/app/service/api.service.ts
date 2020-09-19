import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { AboutDTO } from '../dto/about-dto';
import { ExperienceDTO } from '../dto/experience-dto';
import { HeaderDTO } from '../dto/header-dto';
import { IntroDTO } from '../dto/intro-dto';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getHeader(): Observable<HeaderDTO>{
    let result = this.httpClient.get<HeaderDTO>(environment.apiUrlHeaderGet);
    return result;
  }

  public getIntro(): Observable<IntroDTO>{
    let result = this.httpClient.get<IntroDTO>(environment.apiUrlIntroGet);
    return result;
  }

  public getAbout(): Observable<AboutDTO>{
    let result = this.httpClient.get<AboutDTO>(environment.apiUrlAboutGet);
    return result;
  }

  public getExperience(): Observable<ExperienceDTO>{
    let result = this.httpClient.get<ExperienceDTO>(environment.apiUrlExperienceGet);
    return result;
  }

}
