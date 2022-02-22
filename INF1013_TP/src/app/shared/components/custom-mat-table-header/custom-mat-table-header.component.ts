import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-mat-table-header',
  templateUrl: './custom-mat-table-header.component.html',
  styleUrls: ['./custom-mat-table-header.component.scss']
})
export class CustomMatTableHeaderComponent implements OnInit {
  @Input() title: string = '';
  @Input() hideAddButton: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
