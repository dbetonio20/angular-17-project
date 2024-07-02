import { Component, OnInit } from '@angular/core';
import { LargeComponent } from '../large/large.component';
import { MediumComponent } from '../medium/medium.component';
import { SmallComponent } from '../small/small.component';

@Component({
  selector: 'prefetch',
  templateUrl: './prefetch.component.html',
  styleUrls: ['./prefetch.component.css'],
  standalone: true,
  imports: [

    LargeComponent
  ]
})
export class PrefetchComponent implements OnInit {
  public pref: boolean = false;

  constructor() { }

  ngOnInit() {

  }

}
