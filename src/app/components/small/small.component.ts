import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'small-component',
  templateUrl: './small.component.html',
  styleUrls: ['./small.component.css'],
  standalone: true
})
export class SmallComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
