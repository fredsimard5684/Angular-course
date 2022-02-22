import {AfterContentChecked, Component, ContentChild, ElementRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, AfterContentChecked {
  @Input() srvElement: {type: string, name: string, content: string};
  @ContentChild('contentParagraph') contentParagraph: ElementRef;

  constructor() {
    console.log('constructor log!');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('On Changes');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ne on init called');
  }

  ngAfterContentChecked(): void {
    console.log('content ' + this.contentParagraph.nativeElement.textContent);
  }

}
