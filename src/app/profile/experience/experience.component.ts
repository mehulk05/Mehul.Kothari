import { Component, OnInit } from '@angular/core';
import { ExperienceDTO } from 'src/app/dto/experience-dto';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  data:ExperienceDTO;

  constructor(private api: ApiService) { }

  ngOnInit() {

    this.api.getExperience().subscribe((data)=>{      
      this.data = data;
    });
  }

}
