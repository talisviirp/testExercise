import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'common-error-display',
  templateUrl: './common-error-display.component.html',
  styleUrls: ['./common-error-display.component.scss']
})
export class CommonErrorDisplayComponent implements OnInit {

  constructor() { }
  @Input('error') error: any;
  @Input('showError')showError: boolean | undefined;

  ngOnInit(): void {
  }

}
