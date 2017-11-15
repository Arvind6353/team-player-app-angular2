import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sample-child',
  templateUrl: './sample-child.component.html',
  styleUrls: ['./sample-child.component.css']
})
export class SampleChildComponent implements OnInit {

  @Input('childs')
  childs: string;

  constructor() { }

  ngOnInit() {
  }

}
