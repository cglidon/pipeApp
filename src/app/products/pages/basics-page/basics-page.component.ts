import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.scss'
})
export class BasicsPageComponent {

  public nameLower?: string = 'edmundo';
  public nameUpper?: string = 'EDMUNDO';
  public nameTitle?: string = 'eDmUnDo';
  public customDate: Date = new Date();
}
