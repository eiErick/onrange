import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlunosComponent } from "./pages/alunos/alunos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AlunosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
