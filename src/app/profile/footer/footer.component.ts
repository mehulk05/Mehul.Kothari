import { Component, OnInit } from '@angular/core';
import { FooterDTO } from 'src/app/dto/footer-dto';
import { IntroDTO } from 'src/app/dto/intro-dto';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public dataIntro:IntroDTO;
  public dataFooter:FooterDTO;

  constructor(private api: ApiService) { }

  ngOnInit() {

    this.api.getIntro().subscribe((dataI)=>{      
      this.dataIntro = dataI;
    });

    this.api.getFooter().subscribe((dataF)=>{      
      this.dataFooter = dataF;
    });    
  }

}
