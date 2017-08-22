import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() feature = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

// To route between shoppping list and recipe
  onSelect(featureSelected: string){
    this.feature.emit(featureSelected);
  }
}
