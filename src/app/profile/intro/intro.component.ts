import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  cvUrl: any
  constructor(private profileService:ProfileService) { }

  ngOnInit() {

    this.cvUrl =  this.profileService.resumeurl
  }

}
