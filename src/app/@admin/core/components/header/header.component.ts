import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  toogledValue = true;
  @Output() toggleChange = new EventEmitter<boolean>();

  toogled() {
    this.toogledValue = !!!this.toogledValue;
    this.toggleChange.emit(this.toogledValue);
  }

}
