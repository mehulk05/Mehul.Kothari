import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 6',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'PHP\/CODEIGNITER',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'C++',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'PYTHON',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'ADOBE ILLUSTRATOR',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': 'DATA STRUCTURE',
      'progress': '70%'
    }
  ];

  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2016 - 2020',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Engineering',
      'institution': 'MADHAV INSTITUTE OF TECHNOLOGY AND SCIENCE, GWALIOR'
    },
    {
      'id': '2',
      'from_to_year': '2014 - 2015',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': 'GOVT. BOYS H.S. SCHOOL, DHAMNOD, DHAR'
    },
    {
      'id': '3',
      'from_to_year': '2012 - 2013',
      'education': 'High School',
      'stream': 'Science and Mathematics',
      'institution': 'SARSWATI SHISHU VIDHYA MANDIR, DHAMNOD, DHAR'
    }
  ];

  exprienceData: any = [
    {
      'id': '1',
      'from_to_month_year': 'JUNE 2018 - AUGUST 2018',
      'organization': 'WITTYFEED',
      'designation': 'Full Stack Developer',
      'details': `Created fully functional projects for <strong>WittyFeed<\/strong>,
      A publisher Dashboard was created using <strong>Angular 6, CodeIgniter 3 , Rest API and JWT (Json Web Token).
      <\/strong> It involves multiple modules like Analytics, Stories, RSS Links, Payments.
      Another project was Influencer admin Dashboard which has features like app approval,
      app rejection in OneFeed(WittyFeed\u2019s personalised feed SDK) integrations.
      Lastly the admin dashboard for managing publishers for OneFeed.`
    },
    {
      'id': '2',
      'from_to_month_year': 'OCTOBER 2017 - NOVEMBER 2017',
      'organization': 'MITS, GWALIOR',
      'designation': 'Web Developer',
      'details': 'Designed the Official Website of the <strong>INDUSTRY CONCLAVE<\/strong>.'
    },
    {
      'id': '3',
      'from_to_month_year': 'AUGUST 2017 - SEPTEMBER 2017',
      'organization': 'QUERENCIA CLUB (MITS)',
      'designation': 'Web Developer',
      'details': 'Developed the Official Website of the <strong>MITSVAH Literary Fest<\/strong>\r\nUnder <strong>Querencia CLUB<\/strong>.'
    }
  ];
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }
}
