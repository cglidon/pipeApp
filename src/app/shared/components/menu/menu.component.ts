import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {


  public items: MenuItem[] | undefined = [];
  
  constructor(private router: Router) {}
    
  ngOnInit() {
        this.items = [
            { label: 'Pipes de Angular', icon: 'pi pi-desktop',
              items:[
                { 
                  label: 'Textos y fechas', 
                  icon: 'pi pi-align-left',
                  routerLink:'/' 
                },
                { 
                  label: 'Números', 
                  icon: 'pi pi-dollar',
                  routerLink:'/numbers'
                },
                { 
                  label: 'No comunes', 
                  icon: 'pi pi-globe',
                  routerLink:'/uncommon'
                },

              ]
            },
            { label: 'Pipes settings', icon: 'pi pi-cog',
              items:[
                { label: 'Otro elemento', icon: 'pi pi-cog' }
              ]
            }
        ];
    }
}
