import { Component, OnInit } from '@angular/core';
import { SkillsDTO } from 'src/app/dto/skills-dto';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  data:SkillsDTO;

  constructor(private api: ApiService) { }

  ngOnInit() {

    this.api.getSkill().subscribe((data)=>{      
      this.data = data;
    });

  }

  public GenerateStyle(value){
    return "width: " + value +"%";
  }

}
