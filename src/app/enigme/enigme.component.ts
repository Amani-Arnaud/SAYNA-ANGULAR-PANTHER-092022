import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-enigme',
  templateUrl: './enigme.component.html',
  styleUrls: ['./enigme.component.scss']
})
export class EnigmeComponent implements OnInit {

  constructor(private titleService:Title) {  }

  ngOnInit(): void {
    this.titleService.setTitle('BLACK PANTHER PART.4 | Enigme');
  }

}
