import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppModule } from '../../../app.module';
import { AngularMaterialModule } from '../../../angular-material/angular-material.module';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, AngularMaterialModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
