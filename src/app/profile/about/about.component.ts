import { Component, OnInit } from '@angular/core';
import { AboutDTO } from 'src/app/dto/about-dto';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  data:AboutDTO;

  constructor(private api: ApiService) { }

  ngOnInit() {

    this.api.getAbout().subscribe((data)=>{      
      this.data = data;
    });

  }

}
