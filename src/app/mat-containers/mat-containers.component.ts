import { Component, signal } from '@angular/core';
import { ElementDisplayComponent } from '../element-display/element-display.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButton } from '@angular/material/button';
import { MatButtonToggle } from '@angular/material/button-toggle';

@Component({
  selector: 'crczp-mat-containers',
  standalone: true,
    imports: [
        ElementDisplayComponent,
        MatCardModule,
        MatExpansionModule,
        MatButton,
        MatButtonToggle
    ],
  templateUrl: './mat-containers.component.html',
  styleUrl: './mat-containers.component.scss'
})
export class MatContainersComponent {
    outlined = signal<boolean>(false);

}
