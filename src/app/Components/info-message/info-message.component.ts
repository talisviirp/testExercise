import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'info-message',
  templateUrl: './info-message.component.html',
  styleUrls: ['./info-message.component.scss'],
})
export class InfoMessageComponent implements OnInit {

  constructor() { }
  @Input() text: any
  @Input() type: any

  ngOnInit(): void {
  }

}
