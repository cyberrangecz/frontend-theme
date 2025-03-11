import { Component, Input } from '@angular/core';

@Component({
    selector: 'crczp-element-display',
    standalone: true,
    imports: [],
    templateUrl: './element-display.component.html',
    styleUrl: './element-display.component.scss'
})
export class ElementDisplayComponent {
    @Input() elementName: string = '';

}
