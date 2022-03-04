import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent {
  @Input() public linkUri: string = '';
  @Input() public caption: string = '';
  @Input() public imageName: string = '';

  /*
  public get imageUrl(): string {
    return `assets/images/${this.imageName}`;
  }
  */

  public get imageUrl(): string {
    if (this.imageName !== undefined && this.imageName.length > 0) {
      return `assets/images/${this.imageName}`;
    } else {
      return '';
    }
  }
}
