import { Component, OnInit } from '@angular/core';
import { IntroDTO } from 'src/app/dto/intro-dto';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  public data:IntroDTO;

  constructor(private api: ApiService) { }

  ngOnInit() {

    this.api.getIntro().subscribe((data)=>{      
      this.data = data;
    });


  }


}
