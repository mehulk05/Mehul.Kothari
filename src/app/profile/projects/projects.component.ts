import { Component, OnInit } from '@angular/core';
import { ProjectDTO } from 'src/app/dto/project-dto';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  data:ProjectDTO;

  constructor(private api: ApiService) { }

  ngOnInit() {

    this.api.getProject().subscribe((data)=>{      
      this.data = data;
    });
  }
}
