import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'info-message',
  templateUrl: './info-message.component.html',
  styleUrls: ['./info-message.component.scss'],
  styles: [
    '#errorInfo {background-color: #e53935; color: white}',
    '#successInfo {background-color: #4caf50; color: white}',
    '#resetInfo {background-color: #2196f3; color: white}'
  ]
})
export class InfoMessageComponent implements OnInit {

  constructor() { }
  @Input() text: any
  @Input() type: any

  ngOnInit(): void {
  }

}
