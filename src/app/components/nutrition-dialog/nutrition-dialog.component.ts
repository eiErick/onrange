import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-nutrition-dialog',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatButton,
  ],
  templateUrl: './nutrition-dialog.component.html',
  styleUrl: './nutrition-dialog.component.css'
})
export class NutritionDialogComponent {

}
