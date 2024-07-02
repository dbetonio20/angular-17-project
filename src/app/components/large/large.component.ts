import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'large-component',
  templateUrl: './large.component.html',
  styleUrls: ['./large.component.css'],
  standalone: true
})
export class LargeComponent implements OnInit {
  @Input() expanded: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
