import { Component } from '@angular/core';
import {AperoRestService} from "../../services/apero-rest.service";

@Component({
  selector: 'app-sweet-home',
  standalone: true,
  imports: [],
  templateUrl: './sweet-home.component.html',
  styleUrl: './sweet-home.component.scss'
})
export class SweetHomeComponent {
  protected messageApero?: string;

  constructor(
    private aperoRestService: AperoRestService,
  ) {
    aperoRestService.messageApero().subscribe(messageApero => this.messageApero = messageApero);
  }

}
