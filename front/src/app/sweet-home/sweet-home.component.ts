import {Component} from '@angular/core';
import {AperoRestService} from "../../services/apero-rest.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-sweet-home',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './sweet-home.component.html',
  styleUrl: './sweet-home.component.scss'
})
export class SweetHomeComponent {

  protected apero = '...';
  error?: string;

  constructor(
    aperoRestService: AperoRestService,
  ) {
    aperoRestService.messageApero().subscribe({
      next: messageApero => {
        this.apero = messageApero
        this.error = undefined;
      },
      error: () => this.error = 'Service indisponible :/',
    });
  }

}
