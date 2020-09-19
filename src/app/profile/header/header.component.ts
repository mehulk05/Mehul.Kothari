import { Component, OnInit } from '@angular/core';
import { HeaderDTO } from 'src/app/dto/header-dto';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  data:HeaderDTO;

  constructor(private api: ApiService) { }

  ngOnInit() {

    this.api.getHeader().subscribe((data)=>{      
      this.data = data;
    });


  }

}
