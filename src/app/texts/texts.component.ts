import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ElementDisplayComponent } from '../element-display/element-display.component';

@Component({
  selector: 'crczp-texts',
  standalone: true,
    imports: [
        RouterLink,
        ElementDisplayComponent
    ],
  templateUrl: './texts.component.html',
  styleUrl: './texts.component.scss'
})
export class TextsComponent {

}
