import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  active = false
  searchActive = false

  toggleMenu() {
    this.active = !this.active
  }

  toggleSearchActive() {
    this.searchActive = !this.searchActive
  }
}
