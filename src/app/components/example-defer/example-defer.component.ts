import { Component, OnInit } from '@angular/core';
import { SmallComponent } from '../small/small.component';
import { LargeComponent } from '../large/large.component';
import { MediumComponent } from '../medium/medium.component';

@Component({
  selector: 'example-defer',
  templateUrl: './example-defer.component.html',
  styleUrls: ['./example-defer.component.css'],
  standalone: true,
  imports: [
    SmallComponent,
    MediumComponent,
    LargeComponent
  ]
})
export class ExampleDeferComponent implements OnInit {
  public loadMediumComponent: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
