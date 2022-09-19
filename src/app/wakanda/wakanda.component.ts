import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-wakanda',
  templateUrl: './wakanda.component.html',
  styleUrls: ['./wakanda.component.scss']
})
export class WakandaComponent implements OnInit {

  constructor(
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('BLACK PANTHER PART.4 | WAKANDA');
  }

}
