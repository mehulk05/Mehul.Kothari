import { Component, OnInit } from '@angular/core';
import { EducationDTO } from 'src/app/dto/education-dto';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  data:EducationDTO;

  constructor(private api: ApiService) { }

  ngOnInit() {

    this.api.getEducation().subscribe((data)=>{      
      this.data = data;
    });
  }
}
